import React, { Component } from 'react'

export default class Person extends Component {
    constructor(){
        super();
        this.state={
            data:[1,2,3]
        }
    }

    componentDidMount(){
        fetch("/manager/list")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.data
            })
        })
    }

    delItem = (idx,username) => {
        // this.setState((state,props)=>{
        //     return {
        //         data:state.data.filter((item,index)=>idx!==index)
        //     }
        // })
        fetch('/manager/delmanager',{
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
                data:res.data
            })
        })
    }
    render() {
        return (
            <div>
                <div className='psup'>
                   <span>
                       管理员信息管理
                    </span> 
                    {/* <input name='keyword' placeholder='请输入想查找的人员姓名' type='search' />
                    <button></button> */}
                </div> 
                <div className='psmiddle'>
                    <input type='checkbox'  />
                    <span>姓名</span>
                    <span>性别</span>
                    <span>电话</span>
                    <span>邮箱</span>
                    <span>操作</span>
                </div>
                <div className='psdown'>    
                {
                    this.state.data.map((item,idx)=>(
                            <li key={idx}>
                            <input type='checkbox'  />
                            <span>{item.busername}</span>
                            <span>{item.sex}</span>
                            <span>{item.tel}</span>
                            <span>{item.mail}</span>
                            <span>
                                <button>编辑</button>
                                <button onClick={()=>this.delItem(idx,item.busername)} >删除</button>
                            </span>
                        </li>)
                    )
                }
                </div>
            </div>
        )
    }
}
