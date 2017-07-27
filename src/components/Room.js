import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import YoutubePlayer from './YoutubePlayer';
import SearchList from './SearchList';
import UserList from './UserList';

import {getRoom, getPlaylist} from '../actions';

class Room extends Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        //Getting room data then getting playlist as separate states
        this.props.getRoom(this.props.match.params.id).then((action) => {
            this.props.getPlaylist(action.payload.data.id);
        });
        
    }
    
    componentDidMount(){

    }
    

    render(){
        // console.log(this.props.room);
        return(
            <div className="app-wrapper">
                <Header
                    title={this.props.room.name}
                    navBack={true}
                    search={true}
                />
                <div className="content-wrapper">
                    <UserList/>
                    <div className="playlist-container">
                        <YoutubePlayer
                            /*currentVideo={this.state.currentVideo}
                            playNextInList={this.playNextInList}
                            isSpeaker={this.state.isSpeaker}
                            onNextClick={this.onPlayListItemDelete}
                            currentSong={this.state.currentVideo}
                            onSpeakerClick={this.onSpeakerClick}*/
                        />
                    </div>
                    <SearchList/>
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
   return {room: state.room, playlist: state.playlist}
};

export default connect(mapStateToProps, {getRoom, getPlaylist})(Room);