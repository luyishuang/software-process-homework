import React, { Component } from 'react'
import store from "../store"
import {Link} from 'react-router-dom'

export default class Dtlist extends Component {

    constructor(){
        super();
        this.state={
            username:store.getState().getuser.loginname,
            data:[]
        }
    }

    componentDidMount(){
        this.change=store.subscribe(()=>{
            this.setState({
                username:store.getState().getuser
            })
        })
        fetch("/dt/mine/?username="+this.state.username)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                // var newlist = [...res.message.reverse()];
                var arr= [...res.message];
                arr.map((item)=>{
                    item['username']=this.state.username;
                })
                this.setState({
                    // data:res.message
                    data:arr

                })
            })
    }

    render() {
        return (
            <div>
                <div className='acchead'>
                    <a style={{float:'left',marginLeft:'3%',marginBottom:'1%',fontSize:'28px'}} href='#/tab'>
                        <img src={require('../images/dfanhui2.png')}/>
                    </a>
                    <span style={{ marginTop: '3%' ,float:'left',marginLeft:'30%'}}>我的动态</span>
                </div>
                <div>
                    {
                        this.state.data.map((item,idx)=>(
                            <Link to={{pathname:'/community/detail',state:item}}>
                                    <div className='topic'  >
                                <li key={idx} className='topic'>
                                    <div className='cotop'>
                                       <img src={item.imgpath}/>
                                        <span className='coname'>{this.state.username}</span>
                                        {/* <span className='codown'>{item.content}</span> */}

                                        <span className='cotime'>{item.createtime}</span>
                                    </div>
                                    <div className='codown'>
                                        <p>{item.content}</p>
                                    </div>
                                </li>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        )
    }
}
