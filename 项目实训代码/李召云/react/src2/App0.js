import React, { Component } from 'react';
// import Header from './component/Header';
import Header from './component2/Header';
import {HashRouter as Router,Route} from "react-router-dom";
// import Home from "./container/Home/Home";
// import Start from "./container/Start";
// import Api from "./container/Api";
// import About from "./container/About";
// import Login from './container/Login';
import Home from "./container2/Home2/Home";
import Start from "./container2/Start";
import Api from "./container2/Api";
import About from "./container2/About";
import Login from './container2/Login';
import Topic from './container2/Home2/Topic';

/**
 *  父子组件：
 *      子组件想出来，先让父组件出来
 */

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <div className="left">
                        <Route path="/home" component={Home}/>
                        <Route path="/start" component={Start}/>
                        <Route path="/api" component={Api}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topic/:id" component={Topic}/>
                        
                    </div>
                    <div className="right">
                        <h1>Hello React</h1>
                        <h1>Hello React</h1>
                        <h1>Hello React</h1>
                        <img src='https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS' style={{width:'100%'}}/>
                        HTML5
                    </div>
                </div>
            </Router>
        )
    }
}
