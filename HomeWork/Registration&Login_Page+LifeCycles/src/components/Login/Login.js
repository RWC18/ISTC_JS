import React, {Component} from 'react';

import './Login.css';
import Input from '../Forms/Input/Input'

class Login extends Component{
    render() {
        return (
        <div className="LoginDiv">
            <h1>Login</h1>
            <Input type="text" placeholder="Write your email" classname="Input Login"></Input>
            <Input type="password" placeholder="Write your password" classname="Input Login"></Input>
            <div className="LoginLinks">
                <a href="/" className="BackToMain">Back to main page</a>
                <a href="/profile" className="GoToProfile">Login</a>
                <a href="/registration" className="GoToRegistration">Go to Registration</a>
            </div>
        </div>
        );
    }
}  

export default Login;