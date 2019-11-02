import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { signIn, signUpSuccess } from "../../actions/index";

import SignUp from "../forms/SignUp";
import SignIn from "../forms/SignIn";

class Forms extends Component {
    constructor(props) {
        super(props);

        this.state = {
            toggleForm: false,
            toggleMessage: false
        };
    }

    // componentDidMount() {
    //     if (this.state.toggleMessage) {
    //         this.setState({ toggleMessage: false });
    //     }
    // }

    componentDidUpdate() {
        if (this.props.signUpState.success && !this.state.toggleMessage) {
            this.setState({ toggleMessage: !this.state.toggleMessage }, () => {
                this.props.dispatch(
                    signUpSuccess({
                        success: false,
                        username: this.props.signUpState.username,
                        password: this.props.signUpState.password
                    })
                );
            });
        }
    }

    onToggleForm = () => {
        this.setState({
            toggleForm: !this.state.toggleForm
        });
    };

    handleSignIn = () => {
        this.props.dispatch(signIn({
            username: this.props.signUpState.username,
            password: this.props.signUpState.password,
            persistSignIn: false
        }));
    }

    render() {
        let formMessage = (
            <div className="form-message">
                <div className="form-message__container">
                    <h2 className="form-message__heading">
                        Successfully signed up! <span>Sign in right now or go home?</span>
                    </h2>
                    <button className="btn" onClick={this.handleSignIn}>
                        Sign in
                    </button>
                    <Link to="/" className="btn">
                        Home
                    </Link>
                </div>
            </div>
        );
        return (
            <main>
                {this.state.toggleMessage ? formMessage : null}
                {this.state.toggleForm ? <SignUp onToggleForm={this.onToggleForm} /> : <SignIn onToggleForm={this.onToggleForm} />}
            </main>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.app.auth,
    signUpState: state.app.signUpState
});

export default connect(mapStateToProps)(Forms);
