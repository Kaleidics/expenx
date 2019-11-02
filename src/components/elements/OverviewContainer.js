import React from "react";
import { connect } from "react-redux";
import { fetchMonths } from "../../actions/index";
import FormatNum from "../../helpers/FormatNumber"

class OverviewContainer extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchMonths());
    }

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
            12: "December"
        }

        let sortMonths = this.props.months && this.props.months.sort((a,b) => {
            return a._id - b._id
        });

        let monthAmounts = sortMonths ? sortMonths.map((month, index) => {
            return (
                <li
                    className="overview-container__list-item"
                    key={monthRefs[month._id]}
                    style={{ animationDelay: `${index/15}s` }}
                >
                    <span>{monthRefs[month._id]}</span>
                    <span>${FormatNum(month.total.$numberDecimal)}</span>
                </li>
            );
        }) : null;
        
        return (
            <div className="overview-container">
                <h2 className="overview-container__heading">Monthly Expenses</h2>
                <ul className="overview-container__list">
                    <li className="overview-container__list-item">
                        <span>Month</span>
                        <span>Amount</span>
                    </li>
                    {monthAmounts}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    months: state.app.months
});

export default connect(mapStateToProps)(OverviewContainer);