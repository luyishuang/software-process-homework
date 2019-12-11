import React,{Component} from 'react'
import {Link} from 'react-router-dom'
export default class Mine extends Component{
    render(){
        return(
            <div>
                <div  className='minetitle'>
                    <span style={{fontSize:'22px' ,lineHeight:'40px',float:'left',width:"30%",marginTop:'4%',marginLeft:'35%'}}>我的主页</span>
                </div>
                <div className="mineonbody">
                    <img src={`./yan/dljbg21.jpg`}  className="backimg"/>
                    <div style={{height:'60%',paddingTop:"90%"}}></div>
                    <div className="bcmine">
                        <img src={`./yan/ytx.png`} style={{marginLeft:'35%',width:'30%',height:'auto',
                        borderRadius:'60px',border:'5px solid white'}}/>
                    </div>
                    <div style={{float:'5%',bottom:'0%',width:'90%',marginLeft:'5%',opacity:'0.8',height:'auto',backgroundColor:'white'}}> 
                        <div style={{textAlign:'center',paddingTop:'10%',fontSize:'22px'}}>aaa</div>
                        <Link to='/mine/tourist'><p style={{textAlign:'center',paddingTop:'0%',fontSize:'22px',color:'black'}}>我的收藏</p></Link>
                        <Link to='/mine/account'><p style={{textAlign:'center',paddingTop:'0%',fontSize:'22px',color:'black'}}>编辑资料</p></Link>
                        <Link to='/login'><p style={{textAlign:'center',paddingBottom:'30%',fontSize:'22px',color:'black'}}>退出登录</p></Link>
                    </div>
                    </div>
            </div>
        )
    }
} 