import React, { Component } from "react";

import { connect } from "react-redux";
import { verifyToken } from "./actions/index";

import NavBar from "../src/components/elements/NavBar";
import Home from "../src/components/pages/Home";
import Forms from "../src/components/pages/Forms";
import Dashboard from "../src/components/pages/Dashboard";
import UniversalMessage from "../src/components/elements/UniversalMessage";

import RedirectAuthTrue from "./helpers/RedirectAuthTrue";
import RedirectPrivateRoute from "./helpers/RedirectPrivateRoute";

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    componentDidMount() {
        
        if (localStorage.getItem("localtoken") && localStorage.getItem("authedUser")) {
            let token = localStorage.getItem("localtoken");
            this.props.dispatch(verifyToken(token));
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <UniversalMessage />
                    <Route path="/" component={NavBar} />
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/signin" component={Forms} /> */}
                    {/* <Route path="/dashboard" component={Dashboard} /> */}
                    <RedirectAuthTrue authed={this.props.auth} path="/signin" component={Forms} />
                    <RedirectPrivateRoute authed={this.props.auth} path="/dashboard" component={Dashboard} />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.app.auth
});

export default connect(mapStateToProps)(App);
