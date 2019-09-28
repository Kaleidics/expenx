import React from "react";
import FormSelect from "../forms/FormSelect";

export default class ExpenseContainer extends React.Component {
    render() {
        return (
            <div className="expense-container">
                <div className="expense-container__options">
                    <FormSelect options={["Active", "Archived"]} />
                    <button className="btn btn--alt">Add Expense</button>
                </div>
                <div className="expense-container__content">
                    <div className="expense-container__list-header">
                        <p>Expense</p>
                        <p>Type</p>
                        <p>Amount</p>
                        <p>Due Date</p>
                        
                    </div>
                    <ul className="expense-container__list">
                        <li className="list-item">
                            <div className="list-item__inner">
                                <p>Netflix</p>
                                <p>Monthly</p>
                                <p>$11.99</p>
                                <p>9/20/19</p>                                
                            </div>
                        </li>
                        <li className="list-item">
                            <div className="list-item__inner">
                                <p>Netflix</p>
                                <p>Monthly</p>
                                <p>$11.99</p>
                                <p>9/20/19</p>                                
                            </div>
                        </li>
                        <li className="list-item">
                            <div className="list-item__inner">
                                <p>Netflix</p>
                                <p>Monthly</p>
                                <p>$11.99</p>
                                <p>9/20/19</p>                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
