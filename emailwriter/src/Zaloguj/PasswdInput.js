import React from "react";
const PasswordInput = (props) => {
    const {label, value, onChange} = props;
    return  <div className="password-input-group">
        <label htmlFor="password">{label}</label>
        <input id="password" type="password" aria-label="Password" value={value} onChange={onChange}/>
    </div>
}

export default PasswordInput;