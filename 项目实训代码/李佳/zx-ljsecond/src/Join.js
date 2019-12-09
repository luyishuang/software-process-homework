import React from 'react'
import { Button } from 'antd-mobile';
import {Link,Redirect} from 'react-router-dom'

export default  class Join extends React.Component {

constructor(props){
    super(props);
    this.state={
        username:'',
        pwd:'',
        repwd:''
    }
}   

changename=(e)=>{
    this.setState({
        username:e.target.value
    })
}

changepwd=(e)=>{
    this.setState({
        pwd:e.target.value
    })
}
changerepwd=(e)=>{
    this.setState({
        repwd:e.target.value
    })
}

logIn=(username,pwd,repwd)=>{
    console.log(username,pwd,repwd);
    fetch('/join/check',{ 
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        body:  `username=${username}`
    })
    .then(res=>res.json())
    .then(res=>{
        if(res.message=='success'){
            if(pwd === repwd){
                fetch('/join/add',{   //Fetch方法
                    method: 'POST',
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                    body:  `username=${username}&pwd=${pwd}&aggrement=on`
                }).then(res => res.json())
                .then(res=>{
                    console.log(res);
                    if(res.message==='success') {
                        alert('注册成功');
                        this.props.history.push('/');
                    }
                    else window.alert('注册失败')    
                })
            }
            else{
                window.alert('密码不一致') 
            }
        }
        else{
            window.alert('用户名已被注册') 
        }

    })
    
    
}



    render() {
        return (
            
            <div className="register">
                <p>注册</p>
                <input placeholder='请输入用户名' className='input' value={this.state.username} onChange={(e)=>this.changename(e)}/>
                <a>{this.tishi}</a>
                <input type='password' placeholder='请输入密码' className='input' value={this.state.pwd} onChange={(e)=>this.changepwd(e)}/>
                <input  type='password' placeholder='请再次输入密码' className='input' value={this.state.repwd} onChange={(e)=>this.changerepwd(e)}/>
                <div className="xieyi">
                    <label > <input type="checkbox" style={{width:'20px',height:'20px'}}/>
                    我已阅读并同意<span style={{color:'#259b24'}}>《知行用户协议》</span></label>
                    {/* <label > <input type="radio" name='gender' value="Women"
                                    onChange={this.handleChange}/>Women</label>
                    <div>gender: {this.state.value}</div> */}
                </div>
                <Button type='primary' className='quicklogin' onClick={()=>this.logIn(this.state.username,this.state.pwd,this.state.repwd)}>立即注册</Button>
                <Link to='/login' className='tologin'>已有账号，去登录</Link>
            </div>

        );
    }
}

