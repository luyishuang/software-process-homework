import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Artical extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        // fetch("/artical")
        // .then(res=>res.json())
        // .then(res=>{
        //     this.setState({
        //         data:res
        //     })
        // })
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
    render(){
        return(
            <div>
                <div className='wzup'>
                   <span>
                       文章管理
                    </span> 
                    <input name='keyword' placeholder='请输入想查找的文章相关信息' type='search' />
                    <button className='wzupbutton'></button>
                    <Link to='./addartical'><button className='addart'>点击这里添加文章</button></Link>
                </div>
                <div className='wzmiddle'>
                    <span className='middlew1'>题目</span>
                    <span className='middlew2'>内容</span>
                    <span className='middlew2'>操作</span>
                </div>
                <div className='wzdown'>   
                    {
                        this.state.data.map((item)=>(
                            <li>
                                <input type='checkbox'  />
                                <span className='span2' >{item.title}</span>
                                <span className='span2' >{item.content}</span>
                                <span>
                                    <button onClick={()=>this.deluser(item.username)}>删除</button>
                                </span>
                            </li>
                        ))
                    }
                </div>
            </div>
        )
    }
}