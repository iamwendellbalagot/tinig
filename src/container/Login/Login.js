import React from 'react';
import { accessUrl } from '../../spotify';

import Logo from '../../components/Logo/Logo';

import './Login.css';

const Login = () => {

    return (
        <div className='login'>
            <a href ='https://github.com/iamwendellbalagot'>Developer</a>
            <div className='login__logo'>
                <img
                    src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                    alt=""
                />
                <Logo />
            </div>
            <div className='login__button'>
                <a href={accessUrl}>Login</a>
            </div>
        </div>
    )
}

export default Login;
