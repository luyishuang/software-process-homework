import React from 'react';
import ReactDOM from 'react-dom';
import Tab from './Tab'
import 'antd-mobile/dist/antd-mobile.css';
import {Provider} from 'react-redux'
import Login from './Login';
import App from './App'
import Community from './container/Community';
import Destination from './container/Destination'
import Join from './Join';
import Repeat from './Repeat';
import Topic from './little/Topic'
import Gugong from './little/Gugong';
import Home from './container/Home'
import Tourist from './little/Tourist';
import Account from './little/Account';
import Game from './little/Game';
import Tuisong from './little/Tuisong'

ReactDOM.render(
        <App />,
    document.getElementById('root')
)