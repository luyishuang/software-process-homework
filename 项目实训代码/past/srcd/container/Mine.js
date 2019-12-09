import React,{Component} from 'react'
import {Button} from 'antd-mobile'
import {Link} from 'react-router-dom'
export default class Mine extends Component{
    render(){
        return(
            <div>
                <div  className='minetitle'>
                    <div className='mineleft'>
                        <img src={require('../images/dtouxiang1.png')}/>
                    </div>
                    <div className='mineright'>
                        <p>@我绝版了i</p>
                        <img src={require('../images/dnews.png')}/>
                        <img src={require('../images/dtips.png')}/>
                    </div>
                </div>
                <div>
                    <Link to='/mine/tourist'><div className='minebody'><p>游玩记录</p></div></Link>
                    <Link to='/mine/account'><div className='minebody'><p>修改资料</p></div></Link>
                    <div className='minebody1'>
                        <p>新消息提醒</p>
                        <hr/>
                        <p>勿扰模式</p>
                        <hr/>
                        <p>通用</p>
                        <hr/>
                        <p>隐私</p>
                    </div>
                    <div className='minebody1'>
                        <p>关于我们</p>
                        <hr/>
                        <p>反馈</p>
                    </div>
                </div>
                <Button className='btn'> <span>退出登录</span> </Button>
            </div>
        )
    }
} 