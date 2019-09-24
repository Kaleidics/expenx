import React from 'react';
import FormSelect from '../forms/FormSelect';

export default class ExpenseContainer extends React.Component {
    render() {
        return(<div className="expense-container">
            <div className="expense-container__options">
                <FormSelect options={["Active", "Archived"]} />
                <button className="btn btn--alt">Add Expense</button>
            </div>
        </div>)
    }
}