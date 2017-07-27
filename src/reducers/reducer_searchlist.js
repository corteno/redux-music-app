import {SET_SEARCHLIST} from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case SET_SEARCHLIST:
            return action.payload;

        default:
            return state;
    }
};