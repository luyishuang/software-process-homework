import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Link,Switch,Redirect,withRouter} from "react-router-dom"
import Hoc from './Hoc/Hoc'
import Parent from './Context/Parent'
import Sider from './Sider'
import NoMatch from './NoMatch'
import Content from './Router/Content'
import CNode from './Router/CNode'
import Hooks from './Router/Hooks'

function Login(props){
    console.log(props);
    return <button>登录</button>
}
let wrouter=withRouter(Login);
export default class Appl extends Component {
    render() {
        /**
         *      最终只匹配一个route
         *      <Router>标签最终不显示。标签内只能有一个子节点
         */
        return (
            // basename设置目录路径路由，保证在该文件夹下的内容可直接被找到，否则会直接去根目录找
            <Router basename="/build">
                <div>
                    <Content>
                        {/* <h2>content</h2>
                        <ul>
                            <li>sd</li>
                        </ul> */}
                    </Content>
                    <wrouter></wrouter>
                    <Sider/>
                    <div style={{float:'left',border:'2px solid red',marginLeft:100}}>
                       
                        {/* <Route path="/hoc" component={Hoc}/> */}
                        {/* <Route path="/hoc" render={()=><h1>Render 方法</h1>}/> */}
                        {/* <Router exact path="/"> <Hoc/> </Router> */}
                        {/* <Route path="/parent" component={Parent}/>
                        <Route path="/hoc">
                            <Hoc/>
                        </Route> */}
                        <Switch>
                            {/* 非严格模式下，会匹配路径包含的所有情况。/parent路径会匹配/、parent */}
                            <Route path="/hoc" component={Hoc}/>
                            {/* <Route exact path="/"><Hoc/></Route> */}
                            <Route path="/parent" component={Parent}/>
                            {/* <Route path="/hoc">
                                <Hoc/>
                            </Route> */}

                            {/* <Redirect from='/old' to='/hoc'/> */}
                            {/* 路径重定向 :访问原来路径时，会直接跳转到设定的hoc链接上。*/}

                            <Route path="/old" render={(props)=><Redirect to='/hoc'/>}/>
                            <Route path="/content/:id" component={Content}/>
                            <Route path="/cnode/:id" component={CNode}/>
                            <Route path="/hooks/:id" component={Hooks}/>
                            <Route>
                                <NoMatch/>
                                {/* 
                                    任何路径都可以匹配到
                                    位置必须在最后写
                                */}
                            </Route>
                        </Switch>
                    </div>
                   
                </div>
            </Router>
        )
    }
}
