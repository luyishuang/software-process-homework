import React, { Component } from 'react'

export default class Shouye extends Component {
    constructor(){
        super();
        this.state={
            mount:80
        }
    }
    componentDidMount(){
        fetch('/backlogin/mount')
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                mount:res.message
            })
        })
    }
    render() {
        return (
            <div className='syout'>
                <p>username:</p>
                <h1 style={{color:'white'}}>您好，欢迎登陆知行后台系统！</h1>
                <div></div>
                <div className='syin'>
                    <div>
                        <p>今日注册量</p>
                        <p>23</p>
                    </div>
                    <div>
                        <p>今日访问量</p>
                        <p>23</p>
                    </div>
                    <div>
                        <p>用户总量</p>
                        <p>{this.state.mount}</p>
                    </div>
                </div>
            </div>
        )
    }
}
