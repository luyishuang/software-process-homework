import React,{Component} from 'react';
import './login.css';
import {NavLink} from 'react-router-dom';

export default class Login extends Component{
    render(){
        return (
            <div style={{margin:'0 auto',height:"200px",backgroundColor:'white'}}>
                <div style={{backgroundColor:'#eee',height:'30px',lineHeight:'30px'}}>
                    <span style={{color:'green',marginLeft:'10px'}}>主页</span><span>/登录</span>
                </div>
                <ul className='loginul'>
                    <li><span>用户名</span><input type='text' name='user' placeholder='用户名' style={{border:'1px solid #ddd'}}/></li>
                    <li><span>密码</span><input type='password' name='pwd' style={{border:'1px solid #ddd'}}/></li>
                    <li><NavLink to={{pathname:'/home/all/1',state:{url:'/home/all'}}}><input type='button' value='提交'/></NavLink></li>
                </ul>
                
            </div>
        )
    }
}