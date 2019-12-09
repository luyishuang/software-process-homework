import React from 'react'
import { Button } from 'antd-mobile';
import {Link,Redirect} from 'react-router-dom'

export default  class Join extends React.Component {

constructor(props){
    super(props);
}   

    render() {
        return (
            
            <div className="register">
                <p>注册</p>
                <input placeholder='请输入用户名' className='input'/>
                <a>{this.tishi}</a>
                <input placeholder='请输入密码' className='input'/>
                <input placeholder='请再次输入密码' className='input'/>
                <div className="xieyi">
                    <label > <input type="checkbox" style={{width:'20px',height:'20px'}}/>
                    我已阅读并同意<span style={{color:'#259b24'}}>《知行用户协议》</span></label>
                    {/* <label > <input type="radio" name='gender' value="Women"
                                    onChange={this.handleChange}/>Women</label>
                    <div>gender: {this.state.value}</div> */}
                </div>
                <Button type='primary' className='quicklogin'>立即注册</Button>
                <Link to='/login' className='tologin'>已有账号，去登录</Link>
            </div>

        );
    }
}

