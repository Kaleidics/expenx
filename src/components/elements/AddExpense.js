import React from "react";

class AddExpense extends React.Component {
    render() {
        return (
            <div className="addExpense-container animate-left">
                <form className="">hi</form>
                <button className="btn btn--alt" onClick={this.props.handleContent}>
                    Cancel
                </button>
            </div>
        );
    }
}

export default AddExpense;
