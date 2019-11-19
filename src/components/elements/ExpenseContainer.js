import React from "react";
import { connect } from 'react-redux';

import FormSelect from "../forms/FormSelect";
import ListItem from "./ListItem";

class ExpenseContainer extends React.Component {
    constructor(props) {
        super();

        this.state = {
            displayRows: 10,
            displayStatus: "Active",
            range: {
                start: 0,
                end: 10
            }
        }
    }

    render() {
        
        //create array of expense filtered by their status
        let statusFilter = this.state.displayStatus === "All" ? "" : this.state.displayStatus;
        let filteredListItems = this.props.expenses ? this.props.expenses.filter(expense => expense.status.includes(statusFilter) ) : null;
    
        //create array of expense sorted by creation date
        let sortedListItems = filteredListItems ? filteredListItems.sort((a, b) => {
              return new Date(b.createdAt) - new Date(a.createdAt);
        }) : null ;

        //Control render of pagination items before creating HTML elements
        let paginatedListItems = sortedListItems && sortedListItems.slice(this.state.range.start, this.state.range.end);

        //create the list items from the sorted listed items
        let ListItems = paginatedListItems ? paginatedListItems.slice(0, this.state.displayRows).map((expense, index) => {
            return (
                <ListItem {...expense} index={index} key={expense._id} style={{ animationDelay: `${(index / 15)}s` }} />
            );
        }) : null ;

        return (
            <div className="expense-container">
                <div className="expense-container__options">
                    <FormSelect
                        options={["Active", "Archived", "Paid", "All"]}
                        onChange={e => this.setState({ displayStatus: e.target.value })}
                    />
                    <button className="btn btn--solid" onClick={this.props.handleContent}>
                        Add Expense
                    </button>
                </div>
                <div className="expense-container__content">
                    <div className="expense-container__list-header">
                        <p>Expense</p>
                        <p>Type</p>
                        <p>Amount</p>
                        <p>Pay Date</p>
                    </div>
                    <ul className="expense-container__list">{ListItems}</ul>
                </div>
                <div className="expense-container__navigation">
                    <button className="btn btn--alt" 
                        onClick={() => this.setState({ range: { start: this.state.range.start - this.state.displayRows, end: this.state.range.end - this.state.displayRows } })} 
                        disabled={this.state.range.start != 0 ? false : true}>
                        Previous
                    </button>
                    <FormSelect options={[10, 25, 50]} onChange={e => this.setState({ displayRows: e.target.value })} />
                    <button className="btn btn--alt" 
                        onClick={() => this.setState({ range: { start: this.state.range.start + this.state.displayRows, end: this.state.range.end + this.state.displayRows } })} 
                        disabled={this.props.expenses && this.props.expenses.length > 10 && this.props.expenses.length > this.state.range.end ? false : true}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    expenses: state.app.expenses
});

export default connect(mapStateToProps)(ExpenseContainer);