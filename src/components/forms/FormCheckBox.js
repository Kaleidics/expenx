import React from "react";

export default function FormCheckBox(props) {
    return (
        <div className="input-wrapper">
            <div className="checkbox-wrapper">
                <div>{props.label}</div>
                <label className="checkbox-label" htmlFor={props.id}>
                    <input className="checkbox" id={props.id} type={props.type} onChange={e => props.onChange(e)} value={props.value} checked={props.value ? "checked" : ""} />
                    <span className="custom-checkbox"></span>{props.preface}
                    <a target="_blank" href={props.optionLink} rel="noopener noreferrer">
                        {props.labelOption}
                    </a>
                </label>
            </div>
            <span className="input-error">{props.error}</span>
        </div>
    );
}
