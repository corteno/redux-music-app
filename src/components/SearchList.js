import React, {Component} from 'react';
import {connect} from 'react-redux';

import SearchListItem from './SearchListItem';

class SearchList extends Component {

    renderSearchList = () => {
        return this.props.searchlist.map((item) => {
            return (
                <SearchListItem
                    key={item.id}
                    title={item.title}
                    duration={item.duration}
                    imgURL={item.thumbnail}
                />
            );
        });
    };

    render() {
        return (
            <ul className="video-list">
                {(this.props.searchlist.length !== undefined)
                    ? this.renderSearchList()
                    : <div className="no-items-wrapper">
                        <h1 className="no-items-title">Search list is empty.</h1>
                        <p className="no-items-subtitle">Search for a song!</p>
                    </div>
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {searchlist: state.searchlist};
};

export default connect(mapStateToProps, {})(SearchList);