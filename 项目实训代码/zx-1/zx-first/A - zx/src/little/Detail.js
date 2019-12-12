import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    render() {
        return (
            <div className='dtout'>
                <div className='dthead'>
                    <a style={{float:'left',marginLeft:'3%',marginBottom:'1%',fontSize:'28px'}} href='/#/tab'>
                        <img src={require('../images/dfanhui2.png')}/>
                    </a>
                    <span style={{ marginTop: '3%' ,float:'left',marginLeft:'30%'}}>详情</span>
                </div>
                <div className='dtcontent'>
                    <div className='contenttop'>
                        <Link to='/tab/parent'><img src={require('../images/ljtouxiang2.jpg')}/></Link>
                        <span className='contentname'>小行</span>
                        <span className='contenttime'>2019.01.01</span>
                    </div>
                    <div className='contentdown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                    </div>
                </div>
                <div className='dtbottom'>
                    <img src={require('../images/ljbg1.jpg')} className='botleft'/>
                    <img src={require('../images/ljbg2.jpg')} />
                    <img src={require('../images/ljbg4.jpg')} />
                    <img src={require('../images/ljbg5.jpg')} className='botleft'/>
                    <img src={require('../images/ljbg6.jpg')} />
                    <img src={require('../images/ljbg7.jpg')} />
                    <img src={require('../images/ljbg8.jpg')} className='botleft'/>
                    <img src={require('../images/ljbg9.jpg')} />
                    <img src={require('../images/ljbg10.jpg')} />
                </div>
            </div>
        )
    }
}
