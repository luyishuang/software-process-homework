import React,{Component} from 'react'
import {Link,Router} from 'react-router-dom'
export default class Topic extends Component{
    constructor(){
        super();
    }
    goback=()=>{
        window.history.back(-1)
    }
    render(){
        return(
            <div>
                <div className='topictitle'>
                    {/* <Link to='/comm' style={{margin:'5%  16%'}}>×</Link> */}
                    <a className='totitle1' onClick={()=>this.goback()}>×</a>
                    <span style={{fontSize:'20px'}}>发表动态</span>
                    <a>发表</a>
                </div>
                <div className='tobody'>
                    <div style={{float:'left',height:'80%',width:'30%'}}>
                        <img src={require("../images/dtouxiang1.png")} className='toimg'/>
                    </div>
                    <div style={{float:'left',height:'80%',width:'50%',padding:'10% 0'}}>
                        <span className='tospan'>@我绝版了i</span>
                    </div>
                </div>
                <div className='tobodyy'>
                    <textarea cols="40" rows="20" placeholder='请在此输入内容' style={{fontSize:'18px'}}/>
                       
                </div>
            </div>
        )
    }
}