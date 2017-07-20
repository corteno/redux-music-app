import {GET_ROOMS} from '../actions';
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_ROOMS:
            return action.payload.data.rooms;

        default:
            return state;
    }
};