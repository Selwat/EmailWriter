import React from "react";
class TextInput extends React.Component {
    render() {
        const {label, value, onChange} = this.props;

        return <div className="login-input-group">
            <label htmlFor="login">{label}</label>
            <input id="login" type="text" aria-label="Login" value={value} onChange={onChange}/>
        </div>
    }
}
export default TextInput;