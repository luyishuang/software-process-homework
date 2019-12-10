import React, { Component } from 'react'

export default class Huati extends Component {

    constructor(){
        super();
        this.state={
            topic:[]
        }
    }

    componentDidMount(){
        fetch('/backtopiclist')
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                topic:res
            })
        })
    }

    deleteItem=(tpname,id)=>{
        fetch('/deltopic/?tpname='+tpname+'&id='+id,)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                topic:res.topic
            })
        })
    }

    render() {
        return (
            <div>
                <div className='psup'>
                   <span>
                       话题管理
                    </span> 
                    <input name='keyword' placeholder='请输入想查找的关键字' type='search' />
                    <button></button>
                </div> 
                <div className='psmiddle'>
                    <input type='checkbox'  />
                    <span>话题</span>
                    <span>用户</span>
                    <span>内容</span>
                    <span>时间</span>
                    <span>操作</span>
                </div>
                <div className='htdown'> 
                    {
                        this.state.topic.map((item)=>(
                            <div>
                                {
                                    item.list.map((value)=>(
                                        <li>
                                            <input type='checkbox'  />
                                            <span>{item.tpname}</span>
                                            <span>{value.username}</span>
                                            <span style={{display:'inline',width:"25px"}}>{value.content.slice(0,10)}</span>
                                            <span>{value.createtime}</span>
                                            <span>
                                                <button>查看</button>
                                                <button onClick={()=>{this.deleteItem(item.tpname,value.id)}}>删除</button>
                                            </span>
                                        </li>
                                    ))
                                }
                            </div>
                        ))
                    }   
                </div>
            </div>
        )
    }
}
