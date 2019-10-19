import React from "react";
import FormatDate from "../../helpers/FormatDate";

export default class ListItem extends React.Component {
    render() {
        const { expense, expenseType } = this.props;
        const amount = this.props.amount.$numberDecimal;
        const expiration = FormatDate(this.props.expiration);
        return (
            <li className="list-item" style={this.props.style}>
                <div className="list-item__inner">
                    <p>{expense}</p>
                    <p>{expenseType}</p>
                    <p>${amount}</p>
                    <p>{expiration}</p>
                </div>
            </li>
        );
    }
}
