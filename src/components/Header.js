import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../actions';
import {withRouter, Link} from 'react-router-dom';

import AuthServices from '../Utils/AuthService';

import Prompt from './Prompt';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            createRoom: false
        }
    }

    onCreateRoomClick = () => {
        this.setState({createRoom: !this.state.createRoom});
    };

    componentWillMount() {
        this.props.getUser();
    }


    render() {
        return (
            <header className="header">
                <div className="header-wrapper">
                    {this.props.navBack ?
                        <Link to="/" className="header-back-nav header-main-button">
                            <img className="header-chevron" src="../img/chevron-left.svg" alt=""/>
                        </Link>
                        :
                        ''
                    }
                    <h1 className="header-title">{this.props.title}</h1>
                    <div className="user-details" onClick={AuthServices.logout}>
                        <img src="../img/user.svg" alt="" className="user-icon"/>
                    </div>
                    {this.props.createRoom ?
                        <div
                        className="header-create-room"
                        onClick={() => this.onCreateRoomClick()}
                        >
                        +
                        </div>
                        :
                        ''
                    }

                </div>
                {this.state.createRoom ?
                    <Prompt
                        onPromptClose={this.onCreateRoomClick}
                        room
                    />
                    : ''
                }
            </header>
        );
    }
}

let mapStateToProps = (state) => {
    return {user: state.user};
};

export default connect(mapStateToProps, {getUser})(withRouter(Header));