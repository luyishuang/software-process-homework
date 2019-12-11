import React,{Component} from 'react'
import {Button} from 'antd-mobile'

export default class Account extends Component{
    goback=()=>{
        window.history.back(-1)
    }
    render(){
        return(
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>&lt;</span>
                     <span style={{marginTop:'5%'}}>我的资料</span>
                </div>
                <div className='acchead'>
                    <img src={require('../images/dtouxiang1.png')} className='accimg'/>
                </div>
                <div className='accbody'>
                    {/* <p>用户名：<input value='@我绝版了i'></input></p><hr/>
                    <p>性&ensp;&ensp;别：<input placeholder='男'/></p><hr/>
                    <p>手机号：<span>15612345678</span></p><hr/>
                    <p>家&ensp;&ensp;乡：<span>河北师范大学</span></p> */}
                    <div dangerouslySetInnerHTML={{ __html: '<p>用户名:<input>@我绝版了i</input></p>' }} />
                    <div dangerouslySetInnerHTML={{ __html: '<p>性&ensp;&ensp;别:<input>男</input></p>' }} />
                    <div dangerouslySetInnerHTML={{ __html: '<p>手机号:<input>1236485967</input></p>' }} />
                    <div dangerouslySetInnerHTML={{ __html: '<p>家&ensp;&ensp;乡:<input>河北师范大学</input></p>' }} />
                </div>
                <Button>保存</Button>
            </div>
        )
    }
}