import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise'

import App from './components/app';
import Login from './components/Login';
import Rooms from './components/Rooms';
import Room from './components/Room';
import reducers from './reducers';

import AuthService from './Utils/AuthService';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        {AuthService.isLoggedIn()
            ? <BrowserRouter>
                <Switch>
                    <Route path='/room/:id' component={Room}/>
                    <Route path='/' component={Rooms}/>
                </Switch>

            </BrowserRouter>
            : <BrowserRouter>
                <Switch>
                    <Route path='/' component={Login}/>
                </Switch>
            </BrowserRouter>}

    </Provider>
    , document.querySelector('.container'));
