import React from "react";
import { connect } from "react-redux";

let UniversalMessage = props => {
    console.log(props.universalMessageColor)
    let msgState = `universalMessage ${props.universalMessageColor === "success" ? "success" : "failure"}`;

    console.log(msgState)
    let messageOption = props.universalMessage && (
        <div className={msgState}>
            <p>{props.universalMessage}</p>
        </div>
    );

    return <>{messageOption}</>;
}

const mapStateToProps = state => ({
    universalMessage: state.app.universalMessage,
    universalMessageColor: state.app.universalMessageColor
});

export default connect(mapStateToProps)(UniversalMessage);
