import React, {Component} from 'react';
import Youtube from 'react-youtube';
import {connect} from 'react-redux';
import {getPlaylist} from '../actions';

class YoutubePlayer extends Component{
    constructor(props){
        super(props);

        this.state = {
            currentSong: {}
        };
    }

    componentWillMount(){
        /*this.props.getPlaylist().then((action) =>{
            console.log(action);
        });*/
    }

    render(){
        return(
            <div className="youtube-player-wrapper">
                <Youtube
                    className='youtube-player'
                />

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { playlist: state.playlist }
};

export default connect(mapStateToProps, {getPlaylist})(YoutubePlayer);