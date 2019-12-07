import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import{TabBar,SearchBar} from 'antd-mobile'
//import Parent from './Community/Parent'

export default class Community extends Component{
    render(){
        return(
            <div className='lout'>
                <div className='title'> 
                <div style={{fontSize:'22px',color:'white' ,float:'left',width:"30%",marginTop:'5%',marginLeft:'40%'}}>
                    <a>社区</a>
                </div>
                    <Link to='/community/topic'><img src={require('../images/dplus.png')}style={{width:'10%', float:'right',marginRight:'5%',marginTop:'3%'}} /></Link>
                </div>


                <div className='topic'>
                    <div className='cotop'>
                        <Link to='/tab/parent'><img src={require('../images/ltouxiang3.jpg')}/></Link>
                        <span className='coname'>小知</span>
                        <span className='cotime'>2019.01.01</span>
                        <button></button>
                    </div>
                    <div className='codown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                    </div>
                </div>
                <div className='topic'>
                    <div className='cotop'>
                        <Link to='/tab/parent'><img src={require('../images/ltouxiang2.jpg')}/></Link>
                        <span className='coname'>小行</span>
                        <span className='cotime'>2019.01.01</span>
                        <button></button>
                    </div>
                    <div className='codown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                    </div>
                </div>
                <div className='topic'>
                    <div className='cotop'>
                        <Link to='/tab/parent'><img src={require('../images/ltouxiang4.jpg')}/></Link>
                        <span className='coname'>知行</span>
                        <span className='cotime'>2019.01.01</span>
                        <button></button>
                    </div>
                    <div className='codown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                    </div>
                </div>
                <div className='topic'>
                    <div className='cotop'>
                        <Link to='/tab/parent'><img src={require('../images/ltouxiang1.jpeg')}/></Link>
                        <span className='coname'>小知</span>
                        <span className='cotime'>2019.01.01</span>
                        <button></button>
                    </div>
                    <div className='codown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                    </div>
                </div>
                <div className='topic'>
                    <div className='cotop'>
                        <Link to='/tab/parent'><img src={require('../images/dtouxiang2.png')}/></Link>
                        <span className='coname'>小知</span>
                        <span className='cotime'>2019.01.01</span>
                        <button></button>
                    </div>
                    <div className='codown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                    </div>
                </div>
            </div>
        )
    }
}