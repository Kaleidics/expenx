import React, { Component } from "react";

import { connect } from 'react-redux'; 

import NavBar from "../src/components/elements/NavBar";
import Home from "../src/components/pages/Home";
import Forms from '../src/components/pages/Forms';

import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path="/" component={NavBar} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signin" component={Forms} />
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.app.auth
});

export default connect(mapStateToProps)(App);
