import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import{TabBar,SearchBar} from 'antd-mobile'
//import Parent from './Community/Parent'

export default class Community extends Component{
    render(){
        return(
            <div>
                <div className='title'> 
                <div style={{fontSize:'22px',color:'white' ,float:'left',width:"30%",marginTop:'5%',marginLeft:'40%'}}>
                    <a>社区</a>
                </div>
                    <Link to='/community/topic'><img src={require('../images/dplus.png')}style={{width:'10%', float:'right',marginRight:'5%'}} /></Link>
                </div>


                <div className='topic'>
                    <div className='cotop'>
                        <div>
                            <Link to='/tab/parent'><img src={require('../images/dtouxiang2.png')} className='cotopimg'/>
                        </Link></div>
                        <div className='cotopspan'>
                         @我绝版了i
                        </div>
                    </div>
                    <div className='codown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                        <a>2019/11/11</a>
                    </div>
                </div>

                <div className='topic'>
                    <div className='cotop'>
                        <div>
                            <img src={require('../images/dtouxiang2.png')} className='cotopimg'/>    
                        </div>
                        <div className='cotopspan'>
                         @我绝版了i
                        </div>
                    </div>
                    <div className='codown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                        <a>2019/11/11</a>
                    </div>
                </div>
            </div>
        )
    }
}