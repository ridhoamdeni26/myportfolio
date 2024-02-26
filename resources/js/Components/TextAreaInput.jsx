import React from "react";

function TextAreaInput({
    id,
    value,
    onChange,
    disabled,
    placeholder,
    name,
    className = "",
}) {
    return (
        <textarea
            id={id}
            name={name}
            rows="4"
            className="form-control !pr-9"
            value={value}
            onChange={onChange}
            disabled={disabled}
            placeholder={placeholder}
        />
    );
}

export default TextAreaInput;
