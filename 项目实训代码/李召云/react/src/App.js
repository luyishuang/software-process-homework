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
import { HashRouter as Router, Route } from "react-router-dom";
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
import store from './store';
import Home from './container/Home';
import Destination from './container/Destination'
import Community from './container/Community';
import Mine from './container/Mine';
import Searchspeak from './container/Searchspeak';
import CulterDetail from './container/CulterDetail';
import Culterlist from './container/Culterlist';
<<<<<<< HEAD
import Detail from './little/Detail'
=======
import Tuisong from './little/Tuisong'
>>>>>>> 58f3ddeb42d1e5a8ab2f19c65e110a4dae4e7000

class App extends React.Component {
  render() {

    return (
      // <Provider store={store}>
      <Router>
        {/* <Route exact path='/destination?tourist=:tourist' component={Gugong}/>
          <Route exact path='/destination?placename=:placename' component={Taihe}/> */}
          <Route exact path="/" component={Login}  />
          <Route exact path="/login" component={Login}  />
          <Route exact path='/join' component={Join}/>
          <Route exact path="/tab" component={Tab}  />
<<<<<<< HEAD
          <Route path='/community/topic' component={Topic}/>
          <Route path='/community/detail' component={Detail}/>
=======
>>>>>>> 58f3ddeb42d1e5a8ab2f19c65e110a4dae4e7000
          
          <Route exact path='/result/:key' component={Searchspeak}/>
          <Route path='/home/game' component={Game}/>
          <Route path='/home/zuixiao' component={Zuixiao}/>
          <Route path='/home/tuisong' component={Tuisong}/>

          <Route exact path='/city/:city/:tourist' component={Gugong}/>
          <Route exact path='/place/:placename' component={Taihe}/>
          <Route exact path='/culter' component={Culterlist}/>
          <Route exact path='/culter/:name' component={CulterDetail}/>
          {/* <Route exact path='/result/?find=:key' component={Searchspeak}/> */}
          {/* <Route exact path='/taihe' component={Taihe}/> */}
          
          <Route path='/community/topic' component={Topic}/>
          <Route path='/community/detail' component={Detail}/>
          <Route path='/mine/tourist' component={Tourist}/>
          <Route path='/mine/account' component={Account}/>
      </Router>
      // </Provider>
    );
  }
}

export default App
