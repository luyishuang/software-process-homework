import React, { Component } from 'react'

export default class Huati extends Component {
    constructor(){
        super();
        this.state={
            // topic:JSON.parse(localStorage.getItem('infor'))||[]
            // topic:[1,2,3,4,5,6]
            topic:[
                {
                    tpname:'话题名称',
                    list:[
                        {
                            username:"jjj",
                            content:"打不上卡骄傲抠脚大汉",
                            createtime:"09090",
                            id:"1"
                        },
                        {
                            username:"dsa",
                            content:"但空间发挥到了",
                            createtime:"09090",
                            id:"2"
                        }
                    ] 
                }
            ]
        }
    }
    componentDidMount(){
        fetch('http://localhost:3001/backtopiclist')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                // topic:res.result
            })
        })
    }

    delItem = (idx)=>{
        var topic = [...this.state.topic];
        topic.splice(idx,1);
        this.setState({
            topic:topic
        },()=>{
            localStorage.setItem('infor',JSON.stringify(this.state.topic))
        })
    }
    render() {
        return (
            <div>
                <div className='psup'>
                   <span>
                       人员管理
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
                        <li>
                         {
                            item.list.map((value,idx)=>(
                                <li key={idx}>
                                    <input type='checkbox'  />
                                    <span>{item.tpname}</span>
                                    {/* <span> */}
                                        <span>{value.username}</span>
                                        <span>{value.content}</span>
                                        <span>{value.createtime}</span>
                                    {/* </span> */}
                                    <span>
                                        <button>查看</button>
                                        <button onClick={()=>this.delItem(idx)} >删除</button>
                                    </span> 
                                </li>                                
                            ))
                        }
                    </li>)
                )}
                </div>
            </div>
        )
    }
}
