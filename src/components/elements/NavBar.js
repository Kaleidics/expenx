import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/icon1.png"
import SignOutBtn from './SignOutBtn';

import logofinal from "../../assets/logofinal.png";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar__container">
                    <img src={logo} style={{width: "100px", position: "fixed", zIndex: "100", top:"200px"}}/>
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
