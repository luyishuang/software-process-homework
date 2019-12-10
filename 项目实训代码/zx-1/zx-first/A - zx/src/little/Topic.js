import React,{Component} from 'react'
// import {Link,Router} from 'react-router-dom'
// import { List, TextareaItem } from 'antd-mobile';
// import { createForm } from 'rc-form';
export default class Topic extends Component{
    constructor(){
        super();
        this.state={
            data:[],
            content:''
        }
    }
    componentDidMount() {
        // this.autoFocusInst.focus();
      }
    goback=()=>{
        // console.log(this.state.content);
        window.history.back(-1)
    }
    change=(e)=>{
        this.setState({
            content:e.target.value    
        })
    }
    render(){
        return(
            <div className='toout'>
                <div className='topictitle'>
                    <a className='a1' onClick={()=>this.goback()}><img src={require('../images/fanhui.png')}className="a12" /></a>
                    <span style={{fontSize:'22px'}}>发表动态</span>
                    <a className='a2' >发表</a>
                </div>
                <div className='tobody'>
                    <div style={{float:'left',height:'80%',width:'30%'}}>
                        <img src={require("../images/ljtouxiang3.jpg")}/>
                    </div>
                    <div style={{float:'left',height:'80%',width:'50%',padding:'10% 0'}}>
                        <span>小知</span>
                        <input type='file'/>
                    </div>
                </div>
                <div className='tobodyy'>
                    <textarea cols="40" rows="20" placeholder='分享新鲜事...' value={this.state.content} style={{fontSize:'20px'}} onChange={(e)=>this.change(e)}/>
                </div>
            </div>
        )
    }
}

