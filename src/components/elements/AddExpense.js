import React from "react";

import FormInput from "../forms/FormInput";
import FormSelect from "../forms/FormSelect"

class AddExpense extends React.Component {
    render() {
        return (
            <div className="addExpense-container animate-left">
                <button className="btn btn--alt" onClick={this.props.handleContent}>
                    Cancel
                </button>
                <div className="addExpense-container__form-container">
                    <form className="addExpense-container__form">
                        <fieldset className="addExpense-container__fieldset">
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
                            <FormSelect
                                id={"expense_type"}
                                label={"Expense Type"}
                                options={["One Time", "Daily", "Weekly", "Monthly", "Year"]}
                                // error={this.state.typeError}
                                // onChange={e => this.setState({ type: e.target.value })}
                                // value={this.state.type}
                            />
                        </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddExpense;
