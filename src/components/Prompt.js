import React, {Component} from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            roomDetails: {
                name: '',
                password: ''
            },
            isPrivate: false
        };
    }


    onSubmit = () => {

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

        }

        this.setState({roomDetails: currentRoomState});
    };

    handleCheckboxChange = (e) => {
        e.target.checked ? this.setState({isPrivate: true}) : this.setState({isPrivate: false});
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

                    {this.state.isPrivate ?
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
                               onChange={this.handleCheckboxChange}
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

export default Modal;