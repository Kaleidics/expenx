import React from "react";

import FormInput from "./FormInput";
import FormCheckBox from "./FormCheckBox";

import { connect } from "react-redux";
import { signIn } from "../../actions/index";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            persistSignIn: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        console.log("triggered signin");
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="form" noValidate onSubmit={this.handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="legend">Sign In</legend>
                        <FormInput id={"username"} label={"Email"} type={"text"} error={this.state.usernameError} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
                        <FormInput id={"password"} label={"Password"} type={"password"} error={this.state.passwordError} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                        <FormCheckBox id={"persistSignIn"} preface={<>Stay signed in</>} label={"Keep me signed in"} type={"checkbox"} onChange={e => this.setState({ persistSignIn: e.target.checked })} value={this.state.persistSignIn} />
                    </fieldset>
                    <button className="btn" type="submit">Sign In</button>
                <p className="form-alternate" onClick={this.props.onToggleForm}>
                    Don't have an account? <button className="alternate-text">Sign up here.</button>
                </p>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signIn: credentials => {
            dispatch(signIn(credentials));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SignIn);