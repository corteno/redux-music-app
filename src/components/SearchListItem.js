import React from 'react';

const SearchListItem = (props) => {
    return (
        <li className="list-item">
            <div className="video-thumbnail">
                <img src={props.imgURL} alt=""/>
            </div>
            <div className="video-details">
                <div className="video-title">
                    {props.title}
                </div>
                <div className="video-duration subtitle">
                    {props.duration}
                </div>
            </div>
            <div
                className="video-add"
                /*onClick={() => {
                    onVideoSelect(video)
                }}*/>
                +
            </div>
        </li>
    );

};

export default SearchListItem;