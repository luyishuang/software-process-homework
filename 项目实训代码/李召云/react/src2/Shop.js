import React, { Component } from 'react'
import {NavBar,Carousel, Grid,Flex, WingBlank,SearchBar, Button } from 'antd-mobile';

const name=['桌','床','椅','几','柜','书架','沙发','家居装饰','户外家具','全部分类'];
const data = Array.from(new Array(10)).map((_val, i) => ({
  icon: require(`./img/shop_${i+1}.jpg`),
  text: name[i],
}));
// const data1 = Array.from(new Array(2)).map((_val, i) => ({
//     icon: require(`./img/goods_${i}.jpg`)
//   }));

export default class Shop extends Component {
    render() {
        return (
            <div>
                 <NavBar
                    style={{backgroundColor:'#3fcccb',color:"#fff",height:'80px',fontSize:'25px'}}
                    
                    >商城</NavBar>
                    <div style={{zIndex:'13',backgroundColor:'#c9b3a0',opacity:'0.9'}}>
                        <i style={{fontSize:'22px',lineHeight:'22px',float:'left',zIndex:'100',marginTop:'10px'}} className="iconfont icon-shouqi-01"></i>
                        <SearchBar  placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} style={{zIndex:'3',backgroundColor:'#c9b3a0',opacity:'0.9'}}/>
                    </div>
                {/* <div style={{marginTop:'-10%',width:'100%'}}> */}
                    <Carousel
                            autoplay={true}
                            infinite
                            beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => console.log('slide to', index)}
                            >
                                    {[1,2,3,4].map(val => (
                                <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height:'190px'}}
                                >
                                
                                
                                <img
                                    src={require(`./img/shop${val}.jpg`)}
                                    alt=""
                                    style={{ width: '100%',heigth:'100%', verticalAlign: 'midle'}}
                                    onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    }}
                                />
                                </a>
                            ))}
                            
                    </Carousel>
                {/* </div> */}
                <div>
                    <Grid data={data} columnNum={5} itemStyle={{width:'30px'}}/>
                </div>
                <WingBlank>
                    <div className="flex-container" style={{marginTop:'15px'}}>
                        <Flex>
                            {
                                [0,1].map((item)=>(
                                    <Flex.Item>
                                        <img src={require('./img/goods_'+item+'.jpg')} style={{width:'100%'}}/>
                                    </Flex.Item>
                                ))
                            }
                            
                        </Flex>
                        <Flex>
                            {
                                [{content:'Top Art Studio 欧式风格精细...',price:'￥ 39.95'},{content:'顺顺工艺欧式风格塑料外框黑...',price:'￥ 83.99'}].map((item)=>(
                                    <Flex.Item>
                                        <span style={{display:'block',color:'#939393',fontSize:'12px'}}>{item.content}</span>
                                        <span>{item.price}</span>
                                    </Flex.Item>
                                ))
                            }
                            
                        </Flex>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
