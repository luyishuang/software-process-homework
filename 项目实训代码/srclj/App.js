import React, { Component } from 'react'
import Login from './Login'
import Home from './Home'
import {HashRouter as Router,Route} from 'react-router-dom'
import Join from './Join'

export default class App extends Component {
  render() {
    return (
        <Router>
            <div className='bg0'>
              
                <Route exact path='/' component={Login} />
                <Route path='/home' component={Home} />
                <Route path='/join' component={Join} />
            </div>
        </Router>
    )
  }
}
