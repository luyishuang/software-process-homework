import React from 'react';
// import { Segment, input, Button } from 'semantic-ui-react'
import {Button,InputItem} from 'antd-mobile'
import {Link,Route,Router,Redirect} from 'react-router-dom'
import Tab from './Tab'

class Login extends React.Component {
    
    constructor(props) {  //构造函数
        super(props);
        this.state = {
            username:'',
            password:'',
        }
        this.usernameChange = this.usernameChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.submit = this.submit.bind(this);
        this.getConnect = this.getConnect.bind(this);
    }

    usernameChange(e){
        this.setState({ username : e.target.value })
    }

    passwordChange(e){
        this.setState({ password : e.target.value })
    }

    submit(){
        this.getConnect();
    }

    getConnect(){  //api请求函数
        let text = {username:this.state.username,pwd:this.state.password} //获取数据
        let send = JSON.stringify(text);   //重要！将对象转换成json字符串
        // fetch(`http://127.0.0.1:8081/password`,{   //Fetch方法
        fetch('/login/add',{   //Fetch方法
            method: 'POST',
            headers: {'Content-Type': 'application/json; charset=utf-8'},
            body: send
        }).then(res => res.json())
        .then(res=>{
            console.log(res);
            if(res.message==='success') {
                alert('登录成功');
                this.props.history.push('/tab');
            }
            else window.alert('验证失败，用户名或密码错误')
                    
                
        })
        // then(
        //     data => {
        //         if(data登录成功) {
        //             alert('登录成功');
        //             this.props.history.push('/tab');
        //         }
        //         else window.alert('验证失败，用户名或密码错误')
        //     }
        // )
    }

    render(){
        return(
        <div className='login'>
            <p>登 录</p>
            <input 
                id='username' 
                placeholder='用户名' 
                className='input'
                onChange={this.usernameChange}
                value={this.username}
            /><br/>
            <input 
                id='password' 
                type='password' 
                placeholder='密码' 
                className='input'
                style={{marginBottom:'10px'}}
                onChange={this.passwordChange}
            /><br/>
            <a>
                <span className='forget'>忘记密码</span>
                <Link to='/join' className='quickly'>立即注册</Link>
            </a>
            <Button type='primary' 
                className='quicklogin'
                onClick={this.submit}
            ><a>立即登录</a></Button>
        {/* <div dangerouslySetInnerHTML={{__html: "<hr>第三方登录方式</hr>"}} /> */}
            <a style={{color:'gray'}}>第三方登录方式</a>
            <hr></hr>
            <div className='third'>
                <img src={require('./images/dqq.png')}/>
                <img src={require('./images/dwechat.png')}/>
                <img src={require('./images/dmicroblog.png')}/><br/>
                <a className='write'>
                    <span>QQ</span>
                    <span>微信</span>
                    <span>微博</span>
                </a>
            </div>
        </div>
    )
    }
}
export default Login;