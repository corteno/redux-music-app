import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {withRouter} from 'react-router-dom'; //So I can use history.push()

import {getRooms} from '../actions';
import RoomListItem from './RoomListItem';

class RoomList extends Component{
    constructor(props, context){
        super(props, context);
    }

    componentDidMount(){
        this.props.getRooms();
    }

    renderRoomList = () => {
        return _.map(this.props.rooms, room => {
            // console.log(room);
            return(
                <RoomListItem
                    key={room.id}
                    room={room}
                    onClick={this.onRoomClick}
                />
            );
        });
    };

    onRoomClick = (id) => {
        this.props.history.push(`/room/${id}`);
    };

    render(){
        return(
            <ul className="room-list">
                {this.renderRoomList()}
            </ul>
        );
    }
}


let mapStateToProps = (state) => {
    return {rooms: state.rooms}
};

export default connect(mapStateToProps, {getRooms})(withRouter(RoomList));