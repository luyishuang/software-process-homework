import React, { Component } from 'react'
import {NavBar,Icon,Tabs,WingBlank,Flex} from 'antd-mobile';

const tabs = [
    { title:'推荐'},
    { title:'冬季'},
    { title:'宜家'},
    { title:'小清新'},
    { title:'小户型'},
    { title:'个性色彩'},
    { title:'彪'}
  ];
const username=['橙色律动','儿童房','翻滚吧，地毯君','角落里的遐想','hello','最正宗的接口']
export default class Idea extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#eeeeee'}}>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:"#fff",height:'80px',fontSize:'25px'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                    ]}
                    >灵感</NavBar>
                
                <Tabs tabs={tabs} /**和声明的变量名字一致 */
                    initialPage={0} //默认选择的
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div>
                    <WingBlank>
                        <div className="flex-container" style={{marginTop:'15px'}}>
                            <Flex align="baseline">
                                {
                                    [1,2].map((item)=>(
                                        <Flex.Item>
                                            <img src={require('./img/idea'+item+'.jpg')} style={{width:'100%'}}/>
                                            <div style={{wdith:'100%',backgroundColor:'#fff'}}>
                                                <img src={require(`./img/ihead${item}.jpg`)} style={{width:'30px',height:'30px',borderRadius:'15px',marginTop:'-15px'}}/>
                                                <span style={{fontSize:'13px',marginLeft:'8px'}}>{username[item-1]}</span>
                                                <i style={{fontSize:'22px',lineHeight:'22px',color:'red',float:'right'}} className="iconfont icon-xihuan"></i>
                                            </div>
                                        </Flex.Item>
                                    ))
                                }
                            </Flex>
                            <Flex align="baseline">
                                {
                                    [3,4].map((item)=>(
                                        <Flex.Item>
                                            <img src={require('./img/idea'+item+'.jpg')} style={{width:'100%'}}/>
                                            <div style={{wdith:'100%',backgroundColor:'#fff'}}>
                                                <img src={require(`./img/ihead${item}.jpg`)} style={{width:'30px',height:'30px',borderRadius:'15px',marginTop:'-15px'}}/>
                                                <span style={{fontSize:'13px',marginLeft:'8px'}}>{username[item-1]}</span>
                                                <i style={{fontSize:'22px',lineHeight:'22px',color:'red',float:'right'}} className="iconfont icon-xihuan"></i>
                                            </div>
                                        </Flex.Item>
                                    ))
                                }
                            </Flex>
                            
                            <Flex align="baseline">
                                {
                                    [5,6].map((item)=>(
                                        <Flex.Item>
                                            <img src={require('./img/idea'+item+'.jpg')} style={{width:'100%'}}/>
                                            <div style={{wdith:'100%',backgroundColor:'#fff'}}>
                                                <img src={require(`./img/ihead${item}.jpg`)} style={{width:'30px',height:'30px',borderRadius:'15px',marginTop:'-15px'}}/>
                                                <span style={{fontSize:'13px',marginLeft:'8px'}}>{username[item-1]}</span>
                                                <i style={{fontSize:'22px',lineHeight:'22px',color:'red',float:'right'}} className="iconfont icon-xihuan"></i>
                                            </div>
                                        </Flex.Item>
                                    ))
                                }
                            </Flex>
                    </div>
                </WingBlank>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of 2 tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of 3 tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of 4 tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of 5 tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of 6 tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of 7 tab
                    </div>

                </Tabs>
                
            </div>
        )
    }
}
