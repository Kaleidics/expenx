import React from "react";
import { connect } from "react-redux";
import { signOut } from "../../actions/index";

class SignOutBtn extends React.Component {
    handleSignOut = () => {
        this.props.signOut();
    };

    render() {
        return (
            <button className="btn" onClick={this.handleSignOut}>
                Sign Out
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => {
            dispatch(signOut());
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SignOutBtn);
