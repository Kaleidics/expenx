import React from 'react';

export default class extends React.Component {
    render() {
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
                        <p className="dashbar__amount">$20,000.00</p>
                        <p className="dashbar__date">To This Date</p>
                    </div>
                </div>
            </div>
        );
    }
}