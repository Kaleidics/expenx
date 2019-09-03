import React, { Component } from "react";
import { connect } from "react-redux";

import { signUpSuccess } from "../../actions/index";

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
                this.props.dispatch(signUpSuccess({
                    success: false,
                    username: this.props.signUpState.username,
                    password: this.props.signUpState.password,
                }));
            });
        }
    }

    render() {
        let formMessage = (
            <div className="form-message">
                <div className="form-message__container">
                    <h2 className="form-message__heading">
                        Successfully signed up! <span>Sign in right now or go home?</span>
                    </h2>
                    <button className="btn">Sign in</button>
                    <button className="btn">Home</button>
                </div>
            </div>
        );
            console.log("toggle",this.state.toggleMessage)
        return (
            <main>
                {this.state.toggleMessage ? formMessage : null}
                {this.state.toggleForm ? <SignUp /> : <SignIn />}
                <p className="form-alternate" onClick={() => this.setState({ toggleForm: !this.state.toggleForm })}>
                    {this.state.toggleForm ? (
                        <>
                            Already have an account? <button className="alternate-text">Sign in here.</button>
                        </>
                    ) : (
                        <>
                            Don't have an account? <button className="alternate-text">Sign up here.</button>
                        </>
                    )}
                </p>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    signUpState: state.app.signUpState
});

export default connect(mapStateToProps)(Forms);
