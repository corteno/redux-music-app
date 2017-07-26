import React, {Component} from 'react';
import LoginInput from './LoginInput';
import {connect} from 'react-redux';

import AuthService from '../Utils/AuthService';
import {createUser} from '../actions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: true,
            user: {
                username: '',
                password: '',
                email: ''
            },
            message: ''
        };
    }

    resetForm = () => {
        this.setState({
            user: {
                username: '',
                password: '',
                email: ''
            }
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.state.isLogin ?
            AuthService.login({
                username: this.state.user.username,
                password: this.state.user.password
            })

            :

            this.props.createUser(this.state.user).then((action) => {
                if (action.payload.status === 200) {
                    this.onRegisterClick();
                    this.setState({message: 'Successful registration!'});
                }
            });


    };

    onInputChange = (e) => {
        let currentUserState = this.state.user;

        switch (e.target.name) {
            case 'username':
                currentUserState.username = e.target.value;
                break;

            case 'password':
                currentUserState.password = e.target.value;
                break;

            case 'email':
                currentUserState.email = e.target.value;
                break;

        }

        this.setState({user: currentUserState});
    };

    onRegisterClick = () => {
        this.setState({isLogin: !this.state.isLogin}, () => {
            this.resetForm();
        });

    };

    render() {

        return (
            <div className="login-bg">
                <div className="login-wrapper">

                    <form className="login-form" onSubmit={this.onSubmit}>
                        <h1>{this.state.isLogin ? 'Login' : 'Register'}</h1>


                        {this.state.isLogin ? ''
                            : <LoginInput
                                type="email"
                                name="email"
                                className="login-password login-input"
                                onInputChange={this.onInputChange}
                                value={this.state.user.email}
                                labelName="E-Mail"
                            />
                        }

                        <LoginInput
                            type="text"
                            name="username"
                            className="login-username login-input"
                            onInputChange={this.onInputChange}
                            value={this.state.user.username}
                            labelName="Username"
                        />

                        <LoginInput
                            type="password"
                            name="password"
                            className="login-password login-input"
                            onInputChange={this.onInputChange}
                            value={this.state.user.password}
                            labelName="Password"
                        />

                        <input
                            type="submit"
                            value={this.state.isLogin ? 'Login' : 'Register'}
                            className="form-submit"
                        />

                        <div className="login-message">{this.state.message}</div>

                        <p
                            className="login-register"
                            onClick={this.onRegisterClick}>
                            {this.state.isLogin ? 'Click here to register' : 'Click here to login'}
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, {createUser})(Login);