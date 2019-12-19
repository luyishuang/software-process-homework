import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            data:''
        }
    }

    componentDidMount(){
        this.setState({
            data:this.props.location.state
        },()=>{
            console.log(this.state.data);
        })
        // fetch("/dt/content")
        //     .then(res=>res.json())
        //     .then(res=>{
        //         console.log(res);
        //         // var newlist = [...res.message.reverse()];
        //         this.setState({
        //             data:res.message
        //         })
        //     })
    }
    go=()=>{
        window.history.go(-1)
    }

    render() {
        return (
            <div className='dtout'>
                <div className='dthead'>
                    {/* <a style={{float:'left',marginLeft:'3%',marginBottom:'1%',fontSize:'28px'}} href='/#/tab'> */}
                    <a style={{float:'left',marginLeft:'3%',marginBottom:'1%',fontSize:'28px'}} onClick={this.go}>

                        <img src={require('../images/dfanhui2.png')}/>
                        {/* <img src={}/> */}

                    </a>
                    <span style={{ marginTop: '3%' ,float:'left',marginLeft:'30%'}}>详情</span>
                </div>
                <div className='dtcontent'>
                    <div className='contenttop'>
                        <Link to='/tab/parent'><img src={this.state.data['imgpath']}/></Link>
        <span className='contentname'>{this.state.data['username']}</span>
                        <span className='contenttime'>{this.state.data['createtime']}</span>
                    </div>
                    <div className='contentdown'>
                    {this.state.data['content']}
                        {/* <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p> */}
                    </div>
                </div>
                <div className='dtbottom'>
                    <img src={this.state.data['picpath']} className='botleft'/>
                    
                </div>
                {/* <div className='dtcontent'>
                    <div className='contenttop'>
                        <Link to='/tab/parent'><img src={require('../images/ljtouxiang2.jpg')}/></Link>
                        <span className='contentname'>小行</span>
                        <span className='contenttime'>2019.01.01</span>
                    </div>
                    <div className='contentdown'>
                        <p>这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......这次衡山行,最有感觉的几处地方,麻姑仙境,石浪,祝融庙宇等......</p>
                    </div>
                </div> */}
                {/* <div className='dtbottom'>
                    <img src={require('../images/ljbg1.jpg')} className='botleft'/>
                    <img src={require('../images/ljbg2.jpg')} />
                    <img src={require('../images/ljbg4.jpg')} />
                    <img src={require('../images/ljbg5.jpg')} className='botleft'/>
                    <img src={require('../images/ljbg6.jpg')} />
                    <img src={require('../images/ljbg7.jpg')} />
                    <img src={require('../images/ljbg8.jpg')} className='botleft'/>
                    <img src={require('../images/ljbg9.jpg')} />
                    <img src={require('../images/ljbg10.jpg')} />
                </div> */}
            </div>
        )
    }
}

