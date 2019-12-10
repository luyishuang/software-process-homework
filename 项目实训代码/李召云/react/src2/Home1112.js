import React, { Component } from 'react';
import {NavBar,Icon,Tabs,Carousel, WingBlank} from 'antd-mobile';
import { Flex, WhiteSpace } from 'antd-mobile';




const tabs = [
    { title:'推荐'},
    { title:'家居'},
    { title:'餐厨'},
    { title:'床上用品'},
  ];

export default class Home1112 extends Component {
    
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'pink',color:"black"}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                        // <Icon key="1" type="ellipsis" />,
                    ]}
                    >桔家</NavBar>
                <Tabs tabs={tabs} /**和声明的变量名字一致 */
                    initialPage={0} //默认选择的
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}> */}
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
                            {/* <div style={{width:'100%'}}>
                                <img src='./images/00.jpg' style={{float:'left',width:'100%'}}/>
                                <img src='./images/01.jpg' style={{float:'left',width:'100%'}}/>
                                <img src='./images/02.jpg' style={{float:'left',width:'100%'}}/>
                            </div> */}
                            
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of four tab
                    </div>
                </Tabs>
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
                    </div>
                </div>
            </div>
        )
    }
}
