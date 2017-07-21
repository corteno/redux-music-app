import React, {Component} from 'react';
import Header from './Header';

import {setTitle} from '../Utils/SetPageTitle';
import RoomList from './RoomList';

class Rooms extends Component{

    componentWillMount() {
      setTitle('Rooms');
    };

    render(){
        return(
            <div className="rooms-wrapper">
                <Header
                    title="Rooms"
                    createRoom={true}
                />
                <div className="rooms-content-wrapper">
                    <RoomList

                    />
                </div>
            </div>
        );
    }
}

export default Rooms;