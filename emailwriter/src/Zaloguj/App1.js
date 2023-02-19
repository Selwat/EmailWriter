import React from "react";
import TextInput from "./TextInput";
import PasswordInput from "./PasswdInput";

const Button = (props) => {
    const {text, onClick} = props;
    return <div className="button-container">
        <input type="button" value={text} onClick={onClick}/>
    </div>
}

const App1 = (props) => {
    const [formData, setFormData] = React.useState({login: "", password: ""})

    const onClick = () => {
        console.log('Przycisk Kliknięty!')
        console.log('Login: ', formData.login)
        console.log('Password: ', formData.password)
    }

    const onChangeLogin = (e) => {
        setFormData({...formData, login: e.target.value})
    }

    const onChangePassword = (e) => {
        setFormData({...formData, password: e.target.value})
    }

    return <div className="container" >
        <div className="header" >
        <h1> Zaloguj się </h1>
    <hr/>
    </div>
    <form className="form">
        <TextInput label={"Login:"} value={formData.login} onChange={onChangeLogin}/>
        <PasswordInput label={"Hasło:"} value={formData.password} onChange={onChangePassword} />
        <Button text="Zaloguj!" onClick={onClick} />
    </form>
</div>
}

export default App1;