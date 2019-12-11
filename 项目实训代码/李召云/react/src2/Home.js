import React, { Component } from 'react';
import {NavBar,Icon,Tabs,Carousel, WingBlank,Flex} from 'antd-mobile';


export default class Home extends Component {
    
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:"#fff",height:'80px',fontSize:'25px'}}
                    
                    >住 吧 家 居</NavBar>
                
                    <div>

                        {/* <WingBlank>  留空白的*/}
                            <Carousel
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                            >
                            {['1', '2'].map(val => (
                                <a
                                key={val}
                                // href=""
                                // style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                style={{ display: 'inline-block', width: '100%', height:'190px'}}

                                >
                                <img
                                    src={`./images/${val}.png`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'midle' }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    // this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                </a>
                            ))}
                            </Carousel>
                            
                    </div>
                <WingBlank>
                    <Flex justify="between" style={{marginTop:'10px'}}>
                        <img className='inline' src='./images/00.jpg' width='107'/>
                        <img className='inline' src='./images/01.jpg' width='107'/>
                        <img className='inline' src='./images/02.jpg' width='107'/>
                    </Flex>
                </WingBlank>
                <div style={{backgroundColor:'#fff',marginTop:'15px'}}>
                    <div>
                        <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-shuxian-copy"></i>
                        <span style={{fontSize:'20px'}}>热门推荐</span>
                    </div>
                    <img src='./images/2.png' style={{marginTop:'15px',width:'100%'}}/>
                </div>
            </div>
        )
    }
}
