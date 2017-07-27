import {combineReducers} from 'redux';

import UserReducer from './reducer_user';
import RoomsReducer from './reducer_rooms';
import PlaylistReducer from './reducer_playlist';
import SearchlistReducer from './reducer_searchlist';


const rootReducer = combineReducers({
    user: UserReducer,
    rooms: RoomsReducer,
    room: RoomsReducer,
    playlist: PlaylistReducer,
    searchlist: SearchlistReducer

});

export default rootReducer;
