import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import { Pagination } from 'antd-mobile';

const locale = {
  prevText: '上一页',
  nextText: '下一页',
};
// let url = this.props.url;
const App = () => (
    <div className='yhbottom' >
      <Pagination total={5} current={1} locale={locale} />
      {/* {
                    [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <li key={item} className='bot'>
                                    <NavLink to={url+'/'+item}>{item}</NavLink>
                                </li>
                            ))
                } */}
    </div>
);
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
            console.log(res);
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
            console.log(res);
            fetch("/backlogin/backlist")
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.message
            })
        })
        })
    }

    render() {
        return (
            <div className='psout'>
                <div className='psup'>
                   <span>
                       用户管理
                    </span> 
                    <input name='keyword' placeholder='请输入想查找的用户相关信息' type='search' />
                    <button className='psupbutton'></button>
                    
                </div>
                <div className='yhmiddle'>
                    <span className='middles1'>头像</span>
                    <span className='middles2'>用户名</span>
                    <span style={{margin:'0 87px'}} >密码</span>
                    <span>性别</span>
                    <span className='middles2'>年龄</span>
                    <span className='middles2'>操作</span>
                </div>
                <div className='yhdown'>   
                    {
                        this.state.data.map((item)=>(
                            <li>
                                <input type='checkbox'  />
                                <span className='span2'>
                                    <img src={item.imgpath} />
                                </span>{/* {item.img}头像 */}
                                <span className='span2' >{item.username}</span>
                                <span className='span2' >{item.pwd}</span>
                                <span className='span2'>男</span>{/* 性别 */}
                                <span className='span2'>20</span>{/* 年龄 */}
                                <span>
                                    <button onClick={()=>this.deluser(item.username)}>删除</button>
                                </span>
                            </li>
                        ))
                    } 
                </div>
                <App/>
            </div>
        )
    }
}