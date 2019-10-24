import React from 'react';
import { connect } from "react-redux";

import FormatNum from "../../helpers/FormatNumber";

import { fetchTotal, fetchWeek, fetchMonth } from "../../actions/index";

class DashBar extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchTotal());
        this.props.dispatch(fetchWeek());
        this.props.dispatch(fetchMonth());
    }

    render() {
        let total = FormatNum(this.props.total),
        month = FormatNum(this.props.month),
        week = FormatNum(this.props.week);
        
        return (
            <div className="dashbar">
                <div className="dashbar__primary">
                    <h2 className="dashbar__title">Active Expenses</h2>
                </div>
                <div className="dashbar__secondary">
                    <div className="dashbar__container" style={{ animationDelay: ".3s" }}>
                        <p className="dashbar__amount">${week}</p>
                        <p className="dashbar__date">This Week</p>
                    </div>
                    <div className="vertical-bar bar-animate-down" style={{ animationDelay: ".6s" }}></div>
                    <div className="dashbar__container" style={{ animationDelay: ".2s" }}>
                        <p className="dashbar__amount">${month}</p>
                        <p className="dashbar__date">This Month</p>
                    </div>
                    <div className="vertical-bar bar-animate-down" style={{ animationDelay: ".4s" }}></div>
                    <div className="dashbar__container" style={{ animationDelay: ".1s" }}>
                        <p className="dashbar__amount">${total}</p>
                        <p className="dashbar__date">To This Date</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    total: state.app.total,
    week: state.app.week,
    month: state.app.month
});

export default connect(mapStateToProps)(DashBar);