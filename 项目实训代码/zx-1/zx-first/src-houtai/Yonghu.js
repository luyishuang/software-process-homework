import React, { Component } from 'react'

export default class Yonghu extends Component {

    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        fetch("/backlogin/backlist")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.message
            })
        })
    }

    deluser=(username)=>{
        fetch('/backlogin/deluser',{
            method: "POST",
            mode : 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `busername=${username}`
        })
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.message
            })
        })
    }

    render() {
        return (
            <div>
                <div className='psup'>
                   <span>
                       用户管理
                    </span> 
                    <input name='keyword' placeholder='请输入想查找的用户相关信息' type='search' />
                    <button></button>
                </div>
                <div className='psmiddle'>
                    <input type='checkbox'  />
                    <span>用户名</span>
                    <span>密码</span>
                    <span>操作</span>
                </div>
                <div className='yhdown'>   
                    {
                        this.state.data.map((item)=>(
                            <li>
                                <input type='checkbox'  />
                                <span>{item.username}</span>
                                <span>{item.pwd}</span>
                                <span>
                                    <button onClick={()=>this.deluser(item.username)}>删除</button>
                                </span>
                            </li>
                        )
                            
                        )
                    } 
                   
                    
                </div>
            </div>
        )
    }
}
