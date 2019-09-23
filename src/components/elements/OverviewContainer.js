import React from "react";

export default class OverviewContainer extends React.Component {
    render() {
        return (
            <div className="overview-container">
                <h2 className="overview-container__heading">
                    Monthly Expenses
                </h2>
                <ul className="overview-container__list">
                    <li className="overview-container__list-item">
                        <span>Month</span>
                        <span>Amount</span>
                    </li>
                    <li className="overview-container__list-item">
                        <span>January</span>
                        <span>$100.00</span>
                    </li>
                    <li className="overview-container__list-item">
                        <span>February</span>
                        <span>$1.00</span>
                    </li>
                    <li className="overview-container__list-item">
                        <span>March</span>
                        <span>$1001.11</span>
                    </li>
                    <li className="overview-container__list-item">
                        <span>April</span>
                        <span>$56.00</span>
                    </li>
                    <li className="overview-container__list-item">
                        <span>May</span>
                        <span>$100.00</span>
                    </li>
                    <li className="overview-container__list-item">
                        <span>December</span>
                        <span>$10000000.00</span>
                    </li>
                </ul>
            </div>
        );
    }
}
