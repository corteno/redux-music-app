import {GET_PLAYLIST} from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PLAYLIST:
            console.log('get_playlist', action.payload.data);
            return action.payload.data;

        default:
            return state;
    }
};