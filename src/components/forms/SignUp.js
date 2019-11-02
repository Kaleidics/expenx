import React from "react";

import { connect } from 'react-redux';
import { signUp } from "../../actions/index";

import FormInput from "./FormInput";
import FormCheckBox from "./FormCheckBox";

import validate from '../../helpers/validateSignUpForm';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //programmatic error handling
            fullnameError: "",
            usernameError: "",
            passwordError: "",
            confirmPasswordError: "",
            termsError: "",
            policyError: "",

            ////////////
            fullname: "",
            username: "",
            password: "",
            confirmPassword: "",
            terms: false,
            policy: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //checks for errors by looking for a error values in error object
    checkErrors(obj) {
        for (var key in obj) {
            if (obj[key] !== "") return false;
        }
        return true;
    }

    //form validation and submit
    handleSubmit(e) {
        e.preventDefault();
        // this.setState(validate(this.state));
        // if (this.checkErrors(validate(this.state))) {
        //     this.setState({
        //         fullnameError: "",
        //         usernameError: "",
        //         passwordError: "",
        //         confirmPasswordError: "",
        //         termsError: "",
        //         policyError: "",
        //         fullname: "",
        //         username: "",
        //         password: "",
        //         confirmPassword: "",
        //         terms: false,
        //         policy: false
        //     });
        //     alert("Success!");
        // }

        this.setState(validate(this.state), () => {
            if (this.checkErrors(validate(this.state))) {

                const credentials = {
                    fullname: this.state.fullname,
                    username: this.state.username,
                    password: this.state.password
                }
    
                this.props.signUp(credentials);
            }
        });
        
        return;
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="form animate-right" noValidate onSubmit={this.handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="legend">let's get started</legend>
                        <FormInput id={"fullname"} label={"Full name"} type={"text"} error={this.state.fullnameError} onChange={e => this.setState({ fullname: e.target.value })} value={this.state.fullname} />
                        <FormInput id={"username"} label={"Enter your email"} type={"text"} error={this.state.usernameError} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
                        <FormInput id={"password"} label={"Password"} tooltip={" 6 characters | 1 uppercase | 1 lowercase | 1 digit"} type={"password"} error={this.state.passwordError} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                        <FormInput id={"confirmPassword"} label={"Confirm Password"} type={"password"} error={this.state.confirmPasswordError} onChange={e => this.setState({ confirmPassword: e.target.value })} value={this.state.confirmPassword} />
                        <FormCheckBox id={"terms"} label={"Terms of Service"} preface={<>I have read and accept the &nbsp;</>} labelOption={"terms of services"} error={this.state.termsError} optionLink={"https://www.google.com/"} type={"checkbox"} onChange={e => this.setState({ terms: e.target.checked })} value={this.state.terms} />
                        <FormCheckBox id={"policy"} label={"Privacy Policy"} preface={<>I have read and accept the &nbsp;</>} labelOption={"privacy policy"} error={this.state.policyError} optionLink={"https://www.google.com/"} type={"checkbox"} onChange={e => this.setState({ policy: e.target.checked })} value={this.state.policy} />
                    </fieldset>
                    <button className="btn">Sign Up</button>
                    <p className="form-alternate" onClick={this.props.onToggleForm}>
                        Already have an account? <button className="alternate-text">Sign in here.</button>
                    </p>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signUp: credentials => {
            dispatch(signUp(credentials));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(SignUp);