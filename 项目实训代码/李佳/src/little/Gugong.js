import React ,{Component } from 'react'
import {Link} from 'react-router-dom'
export default class Gugong extends Component{
    goback=()=>{
        window.history.back(-1)
    }
    render(){
        return(
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>&lt;</span>
                     <span style={{marginTop:'5%'}}>紫禁城</span>
                </div>
                <div style={{overflow:'hidden'}}>
                    <form name="search" className="ggbar" id="search" action="">
                        <input type="search" name="find" id="find" placeholder='请输入讲解点名称'className='gginput'/>
                    </form>
                </div>

                <div>
                    <div className='ggsmall'>
                        <div className='ggleft'>
                            <img src={require('../images/dtaihe.png')} className='ggimg' />
                        </div>
                        <Link to='/destination/gugong1/taihe'>
                        <div className='ggright'>
                            <div className='ggritop'>
                            <p>1、太和殿</p>
                            <span style={{color:'black'}}> 太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿.</span>
                            </div>
                            <hr/>
                            <div className='ggribot'>
                                <img src={require('../images/dting.png')}className='ggbotimg' />
                                <img src={require('../images/dtouxiang1.png')}className='ggbottou' />
                            </div>
                        </div></Link>
                    </div>

                    <div className='ggsmall'>
                        <div className='ggleft'>
                            <img src={require('../images/dkunning.png')} className='ggimg' />
                        </div>
                        <div className='ggright'>
                            <div className='ggritop'>
                            <p>2、坤宁宫</p>
                            <span>坤宁宫为中国古代宫殿建筑之精华.属于北京故宫内廷后三宫之一,位于交泰殿后面.</span>
                            </div>
                            <hr/>
                            <div className='ggribot'>
                                <img src={require('../images/dting.png')}className='ggbotimg' />
                                <img src={require('../images/dtouxiang1.png')}className='ggbottou' />
                            </div>
                        </div>  
                    </div>
                    <div className='ggsmall'>
                        <div className='ggleft'>
                            <img src={require('../images/dkunning.png')} className='ggimg' />
                        </div>
                        <div className='ggright'>
                            <div className='ggritop'>
                            <p>2、坤宁宫</p>
                            <span>坤宁宫为中国古代宫殿建筑之精华.属于北京故宫内廷后三宫之一,位于交泰殿后面.</span>
                            </div>
                            <hr/>
                            <div className='ggribot'>
                                <img src={require('../images/dting.png')}className='ggbotimg' />
                                <img src={require('../images/dtouxiang1.png')}className='ggbottou' />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}