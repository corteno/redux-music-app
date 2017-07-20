import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import {getRooms} from '../actions';
import RoomListItem from './RoomListItem';

class RoomList extends Component{

    componentDidMount(){
        this.props.getRooms();
    }

    renderRoomList = () => {
        return _.map(this.props.rooms, room => {
            console.log(room.id);
            return(
                <RoomListItem
                    key={room.id}
                    room={room}
                />
            );
        });
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

export default connect(mapStateToProps, {getRooms})(RoomList);