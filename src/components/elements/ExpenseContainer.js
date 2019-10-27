import React from "react";
import { connect } from 'react-redux';

import FormSelect from "../forms/FormSelect";
import ListItem from "./ListItem";

class ExpenseContainer extends React.Component {
    constructor(props) {
        super();

        this.state = {
            displayRows: 10
        }
    }

    //set the number of expenses to display
    setDisplayRows = rowLength => {
        this.setState({
            displayRows: rowLength
        });
    }

    render() {
        
        //create array of expense sorted by creation date
        let sortedListItems = this.props.expenses ? this.props.expenses.sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
        }) : null ;

        //create the list items from the sorted listed items
        let ListItems = sortedListItems ? sortedListItems.slice(0, this.state.displayRows).map((expense, index) => {
            return (
                <ListItem {...expense} index={index} key={expense._id} style={{ animationDelay: `${(index / 15)}s` }} />
            );
        }) : null ;

        return (
            <div className="expense-container">
                <div className="expense-container__options">
                    <FormSelect options={["Active", "Archived", "All"]} />
                    <button className="btn btn--alt" onClick={this.props.handleContent}>Add Expense</button>
                </div>
                <div className="expense-container__content">
                    <div className="expense-container__list-header">
                        <p>Expense</p>
                        <p>Type</p>
                        <p>Amount</p>
                        <p>Pay Date</p>
                    </div>
                    <ul className="expense-container__list">
                        {ListItems}
                    </ul>
                </div>
                <div className="expense-container__navigation">
                    <button className="btn btn--solid">Previous</button>
                    <FormSelect options={[ 10, 25, 50]} onChangeRow={this.setDisplayRows} />
                    <button className="btn btn--solid">Next</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    expenses: state.app.expenses
});

export default connect(mapStateToProps)(ExpenseContainer);