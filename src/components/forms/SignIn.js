import React from "react";

import FormInput from "./FormInput";
import FormCheckBox from "./FormCheckBox";


export default class SignIn extends React.Component {
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
        e.preventDefault();
    }

    render() {
        return (
            <div className="form-wrapper">
                <form className="form" noValidate onSubmit={this.handleSubmit}>
                    <fieldset className="fieldset">
                        <legend className="legend">Sign In</legend>
                        <FormInput id={"username"} label={"Username"} type={"text"} error={this.state.usernameError} onChange={e => this.setState({ username: e.target.value })} value={this.state.username} />
                        <FormInput id={"password"} label={"Password"} type={"password"} error={this.state.passwordError} onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
                        <FormCheckBox id={"persistSignIn"} preface={<>Stay signed in</>} label={"Keep me signed in"} type={"checkbox"} onChange={e => this.setState({ persistSignIn: e.target.checked })} value={this.state.persistSignIn} />
                    </fieldset>
                    <button className="btn">Sign In</button>
                </form>
            </div>
        );
    }
}
