import React from "react";

export default function FormInput(props) {
    return (
        <div className="input-wrapper">
            <label className="label" htmlFor={props.id}>
                {props.label}
                <span className="tooltip">{props.tooltip}</span>
            </label>
            <input className="general-input" id={props.id} type={props.type} onChange={e => props.onChange(e)} value={props.value} step={props.step}/>
            <span className="input-error">{props.error}</span>
        </div>
    );
}
