import React from "react";

import { connect } from 'react-redux';
import { createExpense } from '../../actions/index';

import FormInput from "../forms/FormInput";
import FormSelect from "../forms/FormSelect"
import FormTextArea from "../forms/FormTextArea"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddExpense extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            expiration: new Date(),
            expense: "",
            amount: "",
            expenseType: "One Time",
            status: "Active",
            notes: ""
        }
    }
    
    componentDidUpdate() {
        if (this.props.universalMessage === "Success") {
            this.props.handleContent();
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.createExpense(this.state);
    }

    setExpiration = date => this.setState({ expiration: date });

    render() {
        let today = new Date();
  
        return (
            <div className="addExpense-container animate-left">
                <div className="addExpense-container__options">
                    <button className="btn btn--alt" onClick={this.props.handleContent}>
                        Cancel
                    </button>
                </div>

                <div className="addExpense-container__form-container">
                    <form className="addExpense-container__form" onSubmit={this.handleSubmit}>
                        <fieldset className="addExpense-container__fieldset">
                            <legend className="addExpense-container__legend">Add a new expense</legend>
                            <div className="addExpense-container__form-half">

                                <div className="addExpense-container__form-one">
                                    <FormInput
                                        id={"expense_name"}
                                        label={"Expense"}
                                        type={"text"}
                                        // error={this.state.fullnameError}
                                        onChange={e => this.setState({ expense: e.target.value })}
                                        value={this.state.expense}
                                    />
                                    <FormInput
                                        id={"expense_amount"}
                                        label={"Amount"}
                                        type={"number"}
                                        step={"0.01"}
                                        // error={this.state.fullnameError}
                                        onChange={e => this.setState({ amount: e.target.value })}
                                        value={this.state.amount}
                                    />
                                </div>
                                <div className="addExpense-container__form-two">
                                    <FormSelect
                                        id={"expense_type"}
                                        label={"Expense Type"}
                                        options={["One Time", "Daily", "Weekly", "Monthly", "Year"]}
                                        // error={this.state.typeError}
                                        onChange={e => this.setState({ expenseType: e.target.value })}
                                        value={this.state.expenseType}
                                    />
                                    <FormSelect
                                        id={"expense_status"}
                                        label={"Status"}
                                        options={["Active", "Paid", "Archived"]}
                                        // error={this.state.typeError}
                                        onChange={e => this.setState({ status: e.target.value })}
                                        // value={this.state.status}
                                    />
                                    <div className="addExpense-datepicker">
                                        <label className="label">Date</label>
                                        <DatePicker selected={this.state.expiration} onChange={this.setExpiration} />
                                    </div>
                                </div>
                            </div>
                            <div className="addExpense-container__form-three">
                                <FormTextArea
                                    id={"expense_notes"}
                                    label={"Notes (optional):"}
                                    type={"text"}
                                    rows={"5"}
                                    cols={"10"}
                                    // error={this.state.fullnameError}
                                    onChange={e => this.setState({ notes: e.target.value })}
                                    value={this.state.notes}
                                />
                            </div>
                        </fieldset>
                        <div className="addExpense-container__actions">
                            <button className="btn btn--primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    createResponse: state.app.createResponse,
    universalMessage: state.app.universalMessage
});

const mapDispatchToProps = dispatch => {
    return {
        createExpense: expense => {
            dispatch(createExpense(expense));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddExpense);
