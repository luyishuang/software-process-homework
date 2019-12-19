import React, { Component } from 'react'

export default class Jingdian extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    // componentDidMount(){
    //     fetch("/artical")
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             data:res
    //         })
    //     })
    // }

    // deluser=(username)=>{
    //     fetch('/backlogin/deluser',{
    //         method: "POST",
    //         mode : 'cors',
    //         headers: {
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: `busername=${username}`
    //     })
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             data:res.message
    //         })
    //     })
    // }
    render() {
        return (
            <div>
                <div className='jdup'>
                   <span>
                       景点管理
                    </span> 
                    <input name='keyword' placeholder='请输入想查找的景点相关信息' type='search' />
                    <button></button>
                </div>
                <div className='jdmiddle'>
                    <span className='middlej1'>地区</span>
                    <span className='middlej2'>景区名称</span>
                    <span className='middlej2'>景点名称</span>
                    <span className='middlej2'>内容</span>
                    <span className='middlej2'>编辑</span>
                </div>
                <div className='jddown'>
                    <input type='checkbox'  />
                    <span className='jdspan2' >北京</span>
                    <span className='jdspan2' >故宫</span>
                    <span className='jdspan2' >太和殿</span>
                    <span className='jdspan2' >adakfhawnfwaifhaw大客户发一份未付款啊哈覅佛那我让</span>
                    <span>
                        <button>删除</button>
                    </span>
                </div>
            </div>
        )
    }
}
