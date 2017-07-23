import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import {getRoom} from '../actions';

class Room extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.getRoom(this.props.match.params.id)
    }
    

    render(){
        return(
            <div className="app-wrapper">
                <Header
                    title={this.props.room.name}
                    navBack={true}
                    search={true}
                />
                <div className="content-wrapper"></div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
   return {room: state.room}
};

export default connect(mapStateToProps, {getRoom})(Room);