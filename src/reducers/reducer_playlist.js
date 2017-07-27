import {GET_PLAYLIST} from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_PLAYLIST:
            return action.payload.data;

        default:
            return state;
    }
};