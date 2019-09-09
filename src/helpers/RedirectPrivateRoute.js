import React from "react";
import { Route, Redirect } from "react-router-dom";

//Conditional routing to send User to login/sign up if they are not logged in
export default function PrivateRoute({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authed === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: "/signin", state: { from: props.location } }} />
                )
            }
        />
    );
}
