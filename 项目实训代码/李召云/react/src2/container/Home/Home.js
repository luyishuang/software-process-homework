import React, { Component } from 'react';
import {Link,Route,Switch,Redirect} from "react-router-dom";
import All from './All';
import Share from './Share';
import Jinghua from './Jinghua';
import More from './More';
import '../home.css';
import Ask from './Ask';
import Job from './Job';
import Dev from './Dev';

export default class Home extends Component {
    render() {
        let {url} = this.props.match;       //获取当前点击部分的父级目录
        console.log(this.props.match.url);
        return (
            <div>
                <div className='navhome'>
                    <Link to={{pathname:"/home/all/1",state:{url:url+'/all'}}}>全部</Link>
                    <Link to={{pathname:"/home/good/1",state:{url:url+'/good'}}}>精华</Link>
                    <Link to={{pathname:"/home/share/1",state:{url:url+'/share'}}}>分享</Link>
                    <Link to={{pathname:'/home/ask/1',state:{url:url+'/ask'}}}>问答</Link>
                    <Link to={{pathname:'/home/job/1',state:{url:url+'/job'}}}>招聘</Link>
                    <Link to={{pathname:'/home/dev/1',state:{url:url+'/dev'}}}>客户端测试</Link>
                </div>
                <div className='showcontent'>
                    <Switch>
                        <Route exact path={`${url}/all/:id`} component={All}/>
                        <Route exact path={`${url}/all/topic/:id`} component={More}/>
                        <Route exact path={`${url}/good/:id`} component={Jinghua}/>
                        <Route exact path={`${url}/good/topic/:id`} component={More}/>
                        <Route exact path={`${url}/share/:id`} component={Share}/>
                        <Route exact path={`${url}/share/topic/:id`} component={More}/>
                        <Route exact path={`${url}/ask/:id`} component={Ask}/>
                        <Route exact path={`${url}/ask/topic/:id`} component={More}/>
                        <Route exact path={`${url}/job/:id`} component={Job}/>
                        <Route exact path={`${url}/job/topic/:id`} component={More}/>
                        <Route exact path={`${url}/dev/:id`} component={Dev}/>
                        <Route exact path={`${url}/dev/topic/:id`} component={More}/>
                        <Redirect exact from='/home' to={{pathname:"/home/all/1",state:{url:url+'/all'}}}/>
                        <Redirect exact from='/home/all' to={{pathname:"/home/all/1",state:{url:url+'/all'}}}/>
                        <Redirect exact from='/home/good' to={{pathname:"/home/good/1",state:{url:url+'/good'}}}/>
                        <Redirect exact from='/home/share' to={{pathname:"/home/share/1",state:{url:url+'/share'}}}/>
                        <Redirect exact from='/home/job' to={{pathname:"/home/job/1",state:{url:url+'/job'}}}/>
                        <Redirect exact from='/home/dev' to={{pathname:"/home/dev/1",state:{url:url+'/dev'}}}/>
                        <Redirect exact from='/home/ask' to={{pathname:"/home/ask/1",state:{url:url+'/ask'}}}/>

                    </Switch>
                </div>
            </div>
        )
    }
}
