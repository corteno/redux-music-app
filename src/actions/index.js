import axios from 'axios';
import jwt from 'jsonwebtoken';

import ROOT_API_URL from '../Utils/RootApiUrl';
import AuthService from '../Utils/AuthService';

export const CREATE_USER = 'create_user';
export const SET_USER = 'set_user';
export const GET_USER = 'get_user';
export const GET_ROOMS = 'get_rooms';
export const GET_ROOM = 'get_room';
export const CREATE_ROOM = 'create_room';
export const GET_PLAYLIST = 'get_playlist';


export const createUser = (user) => {
    const request = axios.post(`${ROOT_API_URL}/user`, {
        username: user.username,
        password: user.password,
        email: user.email
    });

    return {
        type: CREATE_USER,
        payload: request
    }
};

export const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user
    }
};

export const getUser = () => {
    const token = jwt.decode(localStorage.getItem('user'));

    return {
        type: GET_USER,
        payload: token.data ? token.data : 'No user data'
    }
};

export const getRooms = () => {
    const request = axios.get(`${ROOT_API_URL}/rooms`);

    return {
        type: GET_ROOMS,
        payload: request
    }
};

export const getRoom = (id, password) => {
    const request = axios.post(`${ROOT_API_URL}/room/${id}`, {password});

    return {
        type: GET_ROOM,
        payload: request
    }
};

export const createRoom = (room) => {
    const request = axios.post(`${ROOT_API_URL}/room`, {
        id: room.id,
        name: room.name,
        password: room.password,
        owner: room.owner,
        isPublic: room.isPublic,
        speakers: room.owner
    });


    return {
        type: CREATE_ROOM,
        payload: request
    }
};

export const getPlaylist = (id) => {
    const request = axios.get(`${ROOT_API_URL}/playlist/${id}`);

    return {
        type: GET_PLAYLIST,
        payload: request
    }
};