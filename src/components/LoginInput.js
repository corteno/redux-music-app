import React from 'react';

const LoginInput = (props) => {
    return (
        <div className="input-wrapper">
            <input
                type={props.type}
                name={props.name}
                className={props.className}
                required="required"
                onChange={props.onInputChange}
                value={props.value}
            />
            <label htmlFor="password">{props.labelName}</label>
            <div className="bar"></div>
        </div>
    );

};

export default LoginInput;
