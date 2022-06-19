import '../styles/main.css';
import React, { useState } from 'react';

export default function Login(props) {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState(false);

    const LogIn = () => {
        window.localStorage.setItem("token", "token");
        window.location = '/';
    }

    return (
        <div className="background">
            <div className="border">
                <div className="grid">
                    <div className="logo">
                        <img src='img/auth_logo.png' />
                    </div>
                    <form className="form_grid">
                        <h2>Your account:</h2>
                        <div className="input_flex">
                            <img src="img/mail.png" />
                            <input type="text" placeholder="Email" value={login} onChange={e => setLogin(e.value)} />
                        </div>
                        <div className="input_flex">
                            <img src="img/open-lock.png" />
                            <input type={showPass ? "text" : "password"} placeholder="Password" value={pass} onChange={e => setPass(e.value)} />
                            <button type='button' onClick={e => setShowPass(!showPass)}>
                                <img src="img/eye.png" />
                            </button>
                        </div>
                        <button type='button' onClick={LogIn}>LogIn</button>
                    </form>
                    <div className="signin">
                        <a href="#">Create account</a>
                    </div>
                </div>
            </div>
        </div>
    );
}