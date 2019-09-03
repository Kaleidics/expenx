import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import logofinal from "../../assets/logofinal.png";

class NavBar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo">
                        <img className="navbar__image" src={logofinal} alt="ExpenX logo" />
                        <p className="navbar__name">ExpenX</p>
                    </Link>
                    <Link to="/signin" className="btn">
                        Sign in
                    </Link>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.app.auth
});

export default connect(mapStateToProps)(NavBar);
