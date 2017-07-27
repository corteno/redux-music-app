import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import YTFormat from 'youtube-duration-format';

import {setSearchlist} from '../actions';
import {connect} from 'react-redux';

const API_KEY = 'AIzaSyDKSHOjEWO3fWq5MWLrJmavVJd7MucgtuQ';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const ROOT_URL_VIDEOS = 'https://www.googleapis.com/youtube/v3/videos';
const MAX_RESULTS = 20;

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onInputChange = (term) => {
        this.setState({term});
    };

    videoSearch = (term) => {
        let params = {
            part: 'snippet',
            key: API_KEY,
            q: term,
            type: 'video',
            maxResults: MAX_RESULTS
        };


        axios.get(ROOT_URL, {params: params})
            .then((res) => {
                let videosArray = [];

                res.data.items.map((video) => {
                    videosArray.push({
                        id: video.id.videoId,
                        title: video.snippet.title,
                        thumbnail: video.snippet.thumbnails.medium.url
                    });
                });


                //Chaining together video IDs so the duration can be fetched with one API request
                let IDs = videosArray.map((video) => {
                    return video.id;
                }).join(',');


                axios.get(ROOT_URL_VIDEOS, {
                    params: {
                        part: 'contentDetails',
                        key: API_KEY,
                        id: IDs
                    }
                })
                    .then((res) => {
                        for (let i = 0; i < videosArray.length; i++) {
                            videosArray[i].duration = YTFormat(res.data.items[i].contentDetails.duration);
                        }

                        //Setting the global state for the searchlist so it can display
                        this.props.setSearchlist(videosArray);

                    })
                    .catch((error) => {
                        console.log(error);
                    });


            })
            .catch((error) => {
                console.log(error);
            })


    };


    render() {
        const videoSearch = _.debounce((term) => {
            this.videoSearch(term);
        }, 200);

        return (
            <div className="search-bar">
                <input
                    className="search-input"
                    value={this.state.term}
                    onChange={event => {
                        this.onInputChange(event.target.value);
                        videoSearch(event.target.value);
                    }}
                    placeholder="Search"
                />
            </div>
        );
    }
}

export default connect(null, {setSearchlist})(SearchBar);