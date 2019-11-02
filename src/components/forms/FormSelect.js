import React from "react";

export default function FormSelect(props) {
    //create options based on props.options array
    const options = props.options.map((option, index) => {
        return (
            <option value={option} key={index}>
                {option}
            </option>
        );
    });

    return (
        <div className="input-wrapper">
            <label className="label" htmlFor={props.id}>{props.label}</label>
            <select className="select" id={props.id} value={props.value} onChange={props.onChange}>
                {options}
            </select>
            <span className="input-error">{props.error}</span>
        </div>
    );
}
