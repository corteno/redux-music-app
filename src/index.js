import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/app';
import Login from './components/Login';
import Rooms from './components/Rooms';
import reducers from './reducers';

import AuthService from './Utils/AuthService';

const createStoreWithMiddleware = applyMiddleware()(createStore);

console.log(AuthService.isLoggedIn());

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>

        {AuthService.isLoggedIn()
            ? <BrowserRouter>
                <Switch>
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
