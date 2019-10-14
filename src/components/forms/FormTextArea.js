import React from "react";

export default function FormTextArea(props) {
    return (
        <div className="input-wrapper">
            <label className="label" htmlFor={props.id}>
                {props.label}
                <span className="tooltip">{props.tooltip}</span>
            </label>
            <textarea
                
                id={props.id}
                onChange={e => props.onChange(e)}
                value={props.value}
                step={props.step}
                rows={props.rows}
                cols={props.cols}
            />
            <span className="input-error">{props.error}</span>
        </div>
    );
}
