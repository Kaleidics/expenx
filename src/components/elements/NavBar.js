import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import SignOutBtn from './SignOutBtn';

import logofinal from "../../assets/logofinal.png";

class NavBar extends Component {
    render() {
        console.log("nav", this.props.auth, this.props.location)
        return (
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo">
                        <img className="navbar__image" src={logofinal} alt="ExpenX logo" />
                        <p className="navbar__name">ExpenX</p>
                    </Link>
                    {this.props.auth && this.props.location.pathname === "/dashboard" ? (
                        <SignOutBtn />
                    ) : (
                        <Link to="/signin" className="btn">
                            {this.props.auth ? "Dashboard" : "Sign in" }
                        </Link>
                    )}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.app.auth
});

export default connect(mapStateToProps)(NavBar);
