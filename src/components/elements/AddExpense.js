import React from "react";

import FormInput from "../forms/FormInput";
import FormSelect from "../forms/FormSelect"
import FormTextArea from "../forms/FormTextArea"


import FormatDate from "../../helpers/FormatDate"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddExpense extends React.Component {

    state = {
        expiration: new Date()
    }

    setExpiration = date => this.setState({expiration: date });

    render() {
        console.log("current date", this.state.expiration)
        return (
            <div className="addExpense-container animate-left">
                <div className="addExpense-container__options">
                    <button className="btn btn--alt" onClick={this.props.handleContent}>
                        Cancel
                    </button>
                </div>

                <div className="addExpense-container__form-container">
                    <form className="addExpense-container__form">
                        <fieldset className="addExpense-container__fieldset">
                            <legend className="addExpense-container__legend">Add a new expense</legend>
                            <div className="addExpense-container__form-one">
                                <FormInput
                                    id={"expense_name"}
                                    label={"Expense"}
                                    type={"text"}
                                    // error={this.state.fullnameError}
                                    // onChange={e => this.setState({ fullname: e.target.value })}
                                    // value={this.state.fullname}
                                />
                                <FormInput
                                    id={"expense_amount"}
                                    label={"Amount"}
                                    type={"number"}
                                    step={"0.01"}
                                    // error={this.state.fullnameError}
                                    // onChange={e => this.setState({ fullname: e.target.value })}
                                    // value={this.state.fullname}
                                />
                            </div>
                            <div className="addExpense-container__form-two">
                                <FormSelect
                                    id={"expense_type"}
                                    label={"Expense Type"}
                                    options={["One Time", "Daily", "Weekly", "Monthly", "Year"]}
                                    // error={this.state.typeError}
                                    // onChange={e => this.setState({ type: e.target.value })}
                                    // value={this.state.type}
                                />
                                <FormSelect
                                    id={"expense_status"}
                                    label={"Status"}
                                    options={["Active", "Paid", "Archived"]}
                                    // error={this.state.typeError}
                                    // onChange={e => this.setState({ type: e.target.value })}
                                    // value={this.state.type}
                                />
                                <div className="addExpense-datepicker">
                                    <label className="label">Date</label>
                                    <DatePicker selected={this.state.expiration} onChange={this.setExpiration} />
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
                                    // onChange={e => this.setState({ fullname: e.target.value })}
                                    // value={this.state.fullname}
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

export default AddExpense;
