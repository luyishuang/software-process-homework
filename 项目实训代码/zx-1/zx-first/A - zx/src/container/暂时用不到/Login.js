import React,{Component} from 'react'
import {TabBar} from 'antd-mobile'

export default class Login extends Component{
    render(){
        return(
            <div style={{textAlign:"center"}}>
                <h3 style={{textAlign:"center",color:"#259B24",marginTop:"5%"}}>登录</h3>
                <input placeholder="用户名"/><br/>
                <input placeholder="密码"/><br/>
                <a>忘记密码？</a>
                <a>立即注册</a>
                <button type="submit">立即登录</button>
                <a>第三方登录</a>
                <TabBar
                unselectedTintColor="#949494"
                tintColor="#259B24"
                barTintColor="white"
                ></TabBar>
                <TabBar.item title="微信"
                    key='Wechat'
                    icon={<div style={{
                        width: '50px',
                        height: '50px',
                        background: "url(" + require("../img/wechat.png") + ")"}}
                    />}>

                </TabBar.item>
                <img src={require=('../img/wechat.png')}/>
                <img src={require=('../img/qq.png')}/>
                <img src={require=('../img/microblog.png')}/>
            </div>
        )
    }
}