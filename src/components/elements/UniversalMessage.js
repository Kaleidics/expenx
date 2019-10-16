import React from "react";
import { connect } from "react-redux";

let UniversalMessage = props => {
    let messageOption = props.universalMessage && (
        <div className="universalMessage">
            <p>{props.universalMessage}</p>
        </div>
    );

    return <>{messageOption}</>;
}

const mapStateToProps = state => ({
    universalMessage: state.app.universalMessage,
});

export default connect(mapStateToProps)(UniversalMessage);
