import React, {Component} from 'react';

import './Registration.css';
import Input from '../Forms/Input/Input'

class Registration extends Component{
    render() {
        return (
        <div className="RegistrationDiv">
            <h1>Registration</h1>
            <Input type="text" placeholder="Write your email" classname="Input Reg"></Input>
            <Input type="password" placeholder="Write your password" classname="Input Reg"></Input>
            <div className="RegistrationLinks">
                <a href="/" className="BackToMain">Back to main page</a>
                <a href="/login" className="GoToProfile">Registration</a>
            </div>
        </div>
        );
    }
}  

export default Registration;