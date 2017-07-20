import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUser} from '../actions';

import AuthServices from '../Utils/AuthService';

class Header extends Component {

    componentWillMount() {
        this.props.getUser();
    }


    render() {
        return (
            <header className="header">
                <div className="header-wrapper">
                    <h1 className="header-title">Rooms</h1>
                    <div className="user-details" onClick={AuthServices.logout}>
                        <img src="../img/user.svg" alt="" className="user-icon"/>
                    </div>
                    <div
                        className="header-create-room"
                        onClick={() => console.log('create room')}
                    > + </div>
                </div>
            </header>
        );
    }
}

let mapStateToProps = (state) => {
    return {user: state.user};
};

export default connect(mapStateToProps, {getUser})(Header);