import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Lefter extends Component {
    render() {
        return (
            <div className='left'>
                <img src={require('./img/logo2.png')}/>
                <li>
                    <Link to='/home/shouye'> &nbsp;&nbsp;&nbsp;首页</Link>
                </li>
                <li>
                    <Link to='/home/person'>管理人员</Link>
                </li>
                <li>
                    <Link to='/home/huati'>话题管理</Link>
                </li>
                <li>
                    <Link to='/home/yonghu'>用户管理</Link>
                </li>
                {/* <li>
                    <Link to='/home/gonggao'>公告管理</Link>
                </li>
                <li>
                    <Link to='/home/file'>文件管理</Link>
                </li> */}
                <li>
                    <Link to='/'> &nbsp;&nbsp;&nbsp;退出</Link>
                </li>
            </div>
        )
    }
}
