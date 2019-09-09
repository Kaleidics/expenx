import React from "react";
import { Route, Redirect } from "react-router-dom";

//Conditional routing to send User to Dashboard if they are logged in AKA localstorage contains a token and a user
export default function AuthTrue({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authed === false ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
                )
            }
        />
    );
}
