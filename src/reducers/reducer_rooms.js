import {GET_ROOMS, GET_ROOM, CREATE_ROOM} from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case GET_ROOMS:
            return action.payload.data;

        case GET_ROOM:
            return  action.payload.data;

        case CREATE_ROOM:
            return {...state, [action.payload.data.id]: action.payload.data};

        default:
            return state;
    }
};