import React, { Component } from 'react';
import ReactDOM from "react-dom";
import {HashRouter as Router,Route,Link,Redirect,Switch} from "react-router-dom";
import Home from './1029/Home';
import About from './1029/About';
import Nomatch from './react-router-dom/Nomatch';
import {Provider} from 'react-redux';
import store from './store';
import Login from './Login1104';
 

ReactDOM.render(
    <Provider store={store}>
    <Router >
        <div>
            <div>
                {/* <li><a href="#/home">首页</a></li>
                <li><a href="#/about">about</a></li> */}
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to='/login'>登录</Link></li>
            </div>
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/home/:id' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/nomatch' component={Nomatch}/>
                    <Redirect to='/nomatch'/>
                </Switch>
            </div>
        </div>
    </Router>
    </Provider>,
    document.getElementById('root')
)

// ReactDOM.render(
//     <Router>
//         <div>
//             <ul>
//                 <li><Link to='/home'>Home</Link></li>
//                 <li><Link to='/about'>About</Link></li>
//             </ul>
//             <div>
//                 <Route path='/home' component={Home}/>
//                 <Route path='/about' component={About}/>
//             </div>
//         </div>
//     </Router>,
//     document.getElementById('root')
// )