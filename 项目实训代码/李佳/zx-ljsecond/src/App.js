import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Login'
import Join from './Join'
import Tab from "./Tab"
import Topic from './little/Topic';
import Gugong from './little/Gugong';
import Game from './little/Game'
import Account from './little/Account';
import Tourist from './little/Tourist';
import Taihe from './little/Taihe';
import Zuixiao from './little/Zuixiao'
import Detail from './container/Detail';
// import Home from './container/Home';
// import Destination from './container/Destination'
// import Community from './container/Community';
// import Mine from './container/Mine';

class App extends React.Component {
  render() {

    return (
      <Router>
        <Route exact path="/" component={Login}  />
        <Route exact path="/login" component={Login}  />
        <Route path='/join' component={Join}/>
        <Route path="/tab" component={Tab}  />
        <Route path='/community/topic' component={Topic}/>
        <Route path='/destination/gugong' component={Gugong}/>
        <Route path='/destination/gugong1/taihe' component={Taihe}/>
        <Route path='/home/game' component={Game}/>
        <Route path='/mine/tourist' component={Tourist}/>
        <Route path='/mine/account' component={Account}/>
        <Route path='/home/zuixiao' component={Zuixiao}/>
        <Route path='/community/detail' component={Detail} /> 
        {/* <Route path='/home' component={Home}/>
        <Route path='/dest' component={Destination}/>
        <Route path='/comm' component={Community}/>
        <Route path='/mine' component={Mine}/> */}
      </Router>
    );
  }
}

export default App

