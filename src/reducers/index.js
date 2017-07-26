import {combineReducers} from 'redux';

import UserReducer from './reducer_user';
import RoomsReducer from './reducer_rooms';
import PlaylistReducer from './reducer_playlist';


const rootReducer = combineReducers({
    user: UserReducer,
    rooms: RoomsReducer,
    room: RoomsReducer,
    playlist: PlaylistReducer

});

export default rootReducer;
