import React from 'react';

const RoomListItem = (props) => {
    return (
        <li className="room-list-item list-item" onClick={() => {props.onClick(props.room.id)}} key={props.room.id} >
            <div className="room-details">
                <div className="room-name">{props.room.name}</div>
                <div className="room-owner">{props.room.owner}</div>
            </div>
            <div className="room-private">{}</div>
        </li>
    );
};

export default RoomListItem;