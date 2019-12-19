import React, { Component } from 'react'

export default class Huati extends Component {

    constructor(){
        super();
        this.state={
            topic:[]
        }
    }

    componentDidMount(){
        fetch('/backtopic')
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                topic:res.message
            })
        })
    }

    deleteItem=(username,time)=>{
        console.log(username,time);
        fetch('/backtopicdel',{
            method: "POST",
            mode : 'cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:  `username=${username}&createtime=${time}`
          }
        )
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            if(res.message==='success'){
                window.alert('成功删除该用户')
            }else{
                window.alert('删除失败')
                
            }
            fetch('/backtopic')
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState((state)=>{
                    return {
                        topic:res.message
                    }
                })
            })
            // this.setState({
            //     topic:res.topic
            // })
        })
        
    }

    render() {
        return (
            <div>
                <div className='psup'>
                   <span>
                       动态管理
                    </span> 
                    <input name='keyword' placeholder='请输入想查找的关键字' type='search' />
                    <button className='psupbutton'></button>
                    {/* <button className='add1'>点击这里添加动态</button> */}
                </div> 
                <div className='psmiddle'>
                    {/* <input type='checkbox'  /> */}
                    {/* <span>动态</span> */}
                    <span>用户</span>
                    <span>内容</span>
                    <span>时间</span>
                    <span>操作</span>
                </div>
                <div className='htdown'> 
                    {
                        this.state.topic.map((item)=>(
                            <li>
                                            <input type='checkbox'  />
                                            {/* <span>{item.tpname}</span> */}
                                            <span>{item.username}</span>
                                            <span style={{display:'inline'}}>{item.content.slice(0,10)}</span>

                                            {/* <span style={{display:'inline'}}>{item.content.slice(0,10)}</span> */}
                                            <span>{item.createtime}</span>
                                            <span>
                                                <button>查看</button>
                                                <button onClick={()=>{this.deleteItem(item.username,item.createtime)}}>删除</button>
                                            </span>
                                        </li>
                            // <div>
                            //     {
                            //         item.list.map((value)=>(
                            //             <li>
                            //                 <input type='checkbox'  />
                            //                 <span>{item.tpname}</span>
                            //                 <span>{value.username}</span>
                            //                 <span style={{display:'inline'}}>{value.content.slice(0,10)}</span>
                            //                 <span>{value.createtime}</span>
                            //                 <span>
                            //                     <button>查看</button>
                            //                     <button onClick={()=>{this.deleteItem(item.tpname,value.id)}}>删除</button>
                            //                 </span>
                            //             </li>
                            //         ))
                            //     }
                            // </div>
                        ))
                    }   
                </div>
            </div>
        )
    }
}
