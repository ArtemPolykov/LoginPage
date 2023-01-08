import '../styles/main.scss';
import React, { useState } from 'react';

export default function Login(props) {

    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [showPass, setShowPass] = useState(false);

    const LogIn = () => {
        window.localStorage.setItem('token', 'token');
        window.location = '/';
    }

    return (
        <form className='login-form'>
            <div className='login-form__logo-wrapper'>
                <img className='login-form__logo-image' src='img/auth_logo.png' alt='img' />
            </div>
            <div className='login-form__input'>
                <h2 className='login-form__header'>Your account:</h2>
                <div className='input-flex'>
                    <img className='input-flex__img' src='img/mail.png' alt='img' />
                    <input className='input-flex__input' type='text' placeholder='Email' value={login} onChange={e => setLogin(e.value)} />
                </div>
                <div className='input-flex'>
                    <img className='input-flex__img' src='img/open-lock.png' alt='img' />
                    <input className='input-flex__input' type={showPass ? 'text' : 'password'} placeholder='Password' value={pass} onChange={e => setPass(e.value)} />
                    <button className='input-flex__button' type='button' onClick={e => setShowPass(!showPass)}>
                        <img className='input-flex__img' src='img/eye.png' alt='img' />
                    </button>
                </div>
                <button className='login-form__submit' type='button' onClick={LogIn}>LogIn</button>
            </div>
            <div className='login-form__signin'>
                <a href='/'>Create account</a>
            </div>
        </form>
    );
}