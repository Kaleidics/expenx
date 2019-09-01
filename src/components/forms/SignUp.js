import React from "react";

import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormCheckBox from "./FormCheckBox";

import validate from '../../helpers/validateSignUpForm';

import logofinal from '../../assets/logofinal.png';

export default class SignUp extends React.Component {
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
            if (obj[key] != "") return false;
        }
        return true;
    }

    //a little long I know, this is how I've been resetting state/forms, works so far
    handleSubmit(e) {
        e.preventDefault();
        this.setState(validate(this.state));
        if (this.checkErrors(validate(this.state))) {
            this.setState({
                fullnameError: "",
                usernameError: "",
                passwordError: "",
                confirmPasswordError: "",
                termsError: "",
                policyError: "",
                fullname: "",
                username: "",
                password: "",
                confirmPassword: "",
                terms: false,
                policy: false
            });
            console.log("Success!", this.state);
            alert("Success!");
        }
        return;
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="form" noValidate onSubmit={this.handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="legend">let's get started</legend>
                        <FormInput id={"fullname"} label={"Full name"} type={"text"} error={this.state.fullnameError} onChange={e => this.setState({ fullname: e.target.value })} value={this.state.fullname} />
                        <FormInput id={"username"} label={"Create a Username"} type={"text"} error={this.state.usernameError} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
                        <FormInput id={"password"} label={"Password"} tooltip={" 6 characters | 1 uppercase | 1 lowercase | 1 digit"} type={"password"} error={this.state.passwordError} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                        <FormInput id={"confirmPassword"} label={"Confirm Password"} type={"password"} error={this.state.confirmPasswordError} onChange={e => this.setState({ confirmPassword: e.target.value })} value={this.state.confirmPassword} />
                        <FormCheckBox id={"terms"} label={"Terms of Service"} labelOption={"terms of services"} error={this.state.termsError} optionLink={"https://www.google.com/"} type={"checkbox"} onChange={e => this.setState({ terms: e.target.checked })} value={this.state.terms} />
                        <FormCheckBox id={"policy"} label={"Privacy Policy"} labelOption={"privacy policy"} error={this.state.policyError} optionLink={"https://www.google.com/"} type={"checkbox"} onChange={e => this.setState({ policy: e.target.checked })} value={this.state.policy} />
                    </fieldset>
                    <button className="btn">Sign Up</button>
                </form>
            </div>
        );
    }
}
