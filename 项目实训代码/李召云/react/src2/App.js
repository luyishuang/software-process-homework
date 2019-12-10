import React, { Component } from 'react';
import AppTab from './Apptab';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import LoginIn from './LoginIn';

export default class App extends Component {
    render() {
        return (
            <Router>
                
                <div style={{width:'100%',height:'500px'}}>
                    <Switch>
                        <Route path='/home' component={AppTab}/>
                        <Route path='/' component={LoginIn}/>
                    </Switch>
                </div>
                {/* <AppTab/> */}
            </Router>
        )
    }
}
