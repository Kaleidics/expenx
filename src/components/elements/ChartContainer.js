import React from "react";
import { connect } from "react-redux";

import ExpenseChart from "../elements/ExpenseChart";
import { fetchExpenses } from "../../actions/index";

class ChartContainer extends React.Component {

    render() {
        const monthRefs = {
            1: "January",
            2: "February",
            3: "March",
            4: "April",
            5: "May",
            6: "June",
            7: "July",
            8: "August",
            9: "September",
            10: "October",
            11: "November",
            12: "December",
        };

        let rawlabels =
            this.props.months &&
            this.props.months.map(month => {
                return month._id;
            });

        let sortedLabels =
            rawlabels &&
            rawlabels.sort((a, b) => {
                return a - b;
            });

        let labels =
            sortedLabels &&
            sortedLabels.map(month => {
                return monthRefs[month];
            });

        let sortedMonths =
            this.props.months &&
            this.props.months.sort((a, b) => {
                return a._id - b._id;
            });

        let expenses =
            sortedMonths &&
            sortedMonths.map(month => {
                return month.total.$numberDecimal;
            });

        return (
            <div className="dashboard___chart-container">
                {this.props.months !== null ? <ExpenseChart monthLabels={labels} monthExpenses={expenses} /> : ""}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    months: state.app.months,
});

export default connect(mapStateToProps)(ChartContainer);
