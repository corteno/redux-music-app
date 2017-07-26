import React, {Component} from 'react';
import {connect} from 'react-redux';
import shortid from 'shortid';
import AuthService from '../Utils/AuthService';

import {createRoom} from '../actions';

class Prompt extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomDetails: {
                name: '',
                password: '',
                isPrivate: false
            }
        };
    }


    onSubmit = (e) => {
        e.preventDefault();

        this.props.createRoom({
            id: shortid.generate(),
            name: this.state.roomDetails.name,
            password: this.state.roomDetails.password,
            owner: AuthService.getUserDetails().username,
            isPublic: !this.state.roomDetails.isPublic,
            speakers: AuthService.getUserDetails().username
        });

        this.props.onPromptClose();
    };

    handleInputChange = (e) => {
        let currentRoomState = this.state.roomDetails;

        switch (e.target.name) {
            case 'roomname':
                currentRoomState.name = e.target.value;
                break;

            case 'password':
                currentRoomState.password = e.target.value;
                break;

            case 'private-radio':
                if(!e.target.checked) currentRoomState.password = '';
                currentRoomState.isPrivate = e.target.checked;
                break;
        }

        this.setState({roomDetails: currentRoomState});
    };


    render() {
        return (
            <div className="prompt-wrapper">
                <div className="prompt-background" onClick={this.props.onPromptClose}> </div>
                <form className="prompt-window login-form" onSubmit={this.onSubmit}>
                    <div className="close-prompt" onClick={this.props.onPromptClose}>×</div>
                    <h1>Create a room</h1>

                    <div className="input-wrapper">
                        <input
                            type="text"
                            name="roomname"
                            className="login-username login-input"
                            required="required"
                            onChange={this.handleInputChange}
                            value={this.state.roomDetails.name}
                        />
                        <label htmlFor="roomname">Name</label>
                        <div className="bar"></div>
                    </div>

                    {this.state.roomDetails.isPrivate ?
                        <div className="input-wrapper">
                            <input
                                type="password"
                                name="password"
                                className="login-password login-input"
                                required="required"
                                onChange={this.handleInputChange}
                                value={this.state.roomDetails.password}
                            />
                            <label htmlFor="roomname">Password</label>
                            <div className="bar"></div>
                        </div>

                        : ''
                    }

                    <div className=" input-wrapper radio-wrapper">
                        <input type="checkbox"
                               name="private-radio"
                               className="private-radio-checkbox"
                               onChange={this.handleInputChange}
                        />
                        <div className="checkmark"></div>
                        <label htmlFor="private-radio" className="private-radio-label">
                            Private
                        </label>
                    </div>

                    <input
                        type="submit"
                        value="Create"
                        className="form-submit"
                    />
                </form>
            </div>
        );
    }
}

export default connect(null, {createRoom})(Prompt);