import React from 'react';

export default class ListItem extends React.Component {
    render() {
        console.log(this.props);
        const { expense, expenseType, expiration } = this.props;
        const amount = this.props.amount.$numberDecimal;
       
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