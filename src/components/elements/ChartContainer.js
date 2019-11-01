import React from 'react'
import ExpenseChart from "../elements/ExpenseChart";

export default class ChartContainer extends React.Component {
    render() {
        return (
            <div className="dashboard___chart-container">
                {this.props.monthLabels !== null ? <ExpenseChart monthLabels={this.props.monthLabels} monthExpenses={this.props.monthExpenses} /> : ""}
            </div>
        );
    }
}

