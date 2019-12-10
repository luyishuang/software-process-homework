// import React,{Component} from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from './Login'
// import Join from './Join'
// import Tab from "./Tab"
// import Parent from './container/Community/Parent';
// import Topic from './Topic';
// import Home from './container/Home';
// import Destination from './container/Destination'
// import Community from './container/Community';
// import Mine from './container/Mine';
// import Tab2 from './Tab2'

// class App extends React.Component {
//   render() {

//     return (
//       <Router>
//         <Route exact path="/" component={Login}  />
//         <Route exact path="/login" component={Login}  />
//         <Route path='/join' component={Join}/>
//          <div>
//            <Tab2/>
//          </div>
//          <div>
//           <Route path='/topic' component={Topic}/>
//           <Route path='/home' component={Home}/>
//           <Route path='/destination' component={Destination}/>
//           <Route path='/community' component={Community}/>
//           <Route path='/mine' component={Mine}/>
//          </div>
//       </Router>
//     );
//   }
// }

// export default App





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
import { Switch } from 'antd-mobile';
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
          <Route exact path='/join' component={Join}/>
          <Route exact path="/tab" component={Tab}  />
          <Route path='/community/topic' component={Topic}/>
          <Route exact path='/city/:tourist' component={Gugong}/>
          {/* <Route exact path='/taihe' component={Taihe}/> */}
          <Route exact path='/place/:placename' component={Taihe}/>
          <Route path='/home/game' component={Game}/>
          <Route path='/mine/tourist' component={Tourist}/>
          <Route path='/mine/account' component={Account}/>
          <Route path='/home/zuixiao' component={Zuixiao}/>
          {/* <Route path='/home' component={Home}/>
          <Route path='/dest' component={Destination}/>
          <Route path='/comm' component={Community}/>
          <Route path='/mine' component={Mine}/> */}
      </Router>
    );
  }
}

export default App

