import React from 'react';

import './Input.css';

const Input = (props) => (
    <input placeholder={props.placeholder} type={props.type} className={props.classname}></input>
);

export default Input;