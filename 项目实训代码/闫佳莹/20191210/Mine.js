import React,{Component} from 'react'
import {Button} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Mine extends Component{
    render(){
        return(
            <div>
                <div  className='minetitle'>
                    <span style={{lineHeight:'40px'}}>我的主页</span>
                </div>
                <div>
                    <img src={`./yan/yb2.jpg`}  className="backimg"/>
                    <div className="beijing"> 
                        <div style={{textAlign:'center',paddingTop:'10%',fontSize:'18px'}}>aaa</div>
                        <Link to='/mine/tourist'><p style={{textAlign:'center',paddingTop:'0%',fontSize:'20px',color:'black'}}>我的收藏</p></Link>
                        <Link to='/mine/account'><p style={{textAlign:'center',paddingTop:'0%',fontSize:'20px',color:'black'}}>编辑资料</p></Link>
                        <Link to='/login'><p style={{textAlign:'center',paddingTop:'0%',fontSize:'20px',color:'black'}}>退出登录</p></Link>
                    </div>
                    <img src={`./yan/ytx.png`} style={{position:'fixed',left:'40%',bottom:'30%',width:'60px',height:'60px',
                        borderRadius:'60px 60px 60px 60px',border:'5px solid white',opacity:'1'}}/>
                </div>
            </div>
        )
    }
} 