import React from "react";
import FormatDate from "../../helpers/FormatDate";

import FormatNum from "../../helpers/FormatNumber";

export default class ListItem extends React.Component {
    render() {
       
        let { expense, expenseType } = this.props;
        let amount = FormatNum(this.props.amount.$numberDecimal);
        let expiration = FormatDate(this.props.expiration);
        let status = this.props.status;
        console.log(status)
        return (
            <li className="list-item" style={this.props.style}>
                <div className="list-item__inner">
                    <p>{expense}</p>
                    <p>{expenseType}</p>
                    <p>${amount}</p>
                    <p>{expiration}</p>
                    <div
                        className="list-item__circle"
                        style={{ backgroundColor: status === "Active" ? "#80ede8" : status === "Archived" ? "#f8c079" : "#ff5e5e" }}
                    ></div>
                </div>
            </li>
        );
    }
}
