import React from "react";
import FormatDate from "../../helpers/FormatDate";

export default class ListItem extends React.Component {
    render() {
        console.log(this.props);
        const { expense, expenseType } = this.props;
        const amount = this.props.amount.$numberDecimal;
        const expiration = FormatDate(this.props.expiration);
        const data = this.props.expiration;
        console.log(typeof data)
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
