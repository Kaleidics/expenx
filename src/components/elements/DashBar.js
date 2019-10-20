import React from 'react';
import { connect } from "react-redux";

import FormatNum from "../../helpers/FormatNumber";

import { fetchTotal } from "../../actions/index";

class DashBar extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchTotal());
    }

    render() {
        const total = FormatNum(this.props.total);
        
        return (
            <div className="dashbar">
                <div className="dashbar__primary">
                    <h2 className="dashbar__title">Active Expenses</h2>
                </div>
                <div className="dashbar__secondary">
                    <div className="dashbar__container">
                        <p className="dashbar__amount">$333.00</p>
                        <p className="dashbar__date">This Week</p>
                    </div>
                    <div className="vertical-bar"></div>
                    <div className="dashbar__container">
                        <p className="dashbar__amount">$500.00</p>
                        <p className="dashbar__date">This Month</p>
                    </div>
                    <div className="vertical-bar"></div>
                    <div className="dashbar__container">
                        <p className="dashbar__amount">${total}</p>
                        <p className="dashbar__date">To This Date</p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    total: state.app.total
});

export default connect(mapStateToProps)(DashBar);