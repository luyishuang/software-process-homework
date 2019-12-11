import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './Home';
import Shop from './Shop';
import Idea from './Idea';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              fullScreen: !this.state.fullScreen,
            });
          }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }

  render() {
    return (
      <div style={{position: 'fixed', height: '100%', width: '100%', top: '0' ,height: '100%' }}>
        <TabBar
          unselectedTintColor="#949494"
          // tintColor="#33A3F4"
          tintColor="orange"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-shouye1"></i>
            // <div style={{
            //   width: '22px',
            //   height: '22px',
            //   background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            // />
            }
            selectedIcon={
              <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-shouye1"></i>
            // <div style={{
            //   width: '22px',
            //   height: '22px',
            //   background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            // />
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome/> 
              {/* 应该放组件 */}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-shouye"></i>
              // <div style={{
              //   width: '22px',
              //   height: '22px',
              //   background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              // />
            }
            selectedIcon={
              <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-shouye"></i>
              // <div style={{
              //   width: '22px',
              //   height: '22px',
              //   background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              // />
            }
            title="商城"
            key="Koubei"
            badge={'new'}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <Shop/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-linggan"></i>
              // <div style={{
              //   width: '22px',
              //   height: '22px',
              //   background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              // />
            }
            selectedIcon={
              <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-linggan"></i>
              // <div style={{
              //   width: '22px',
              //   height: '22px',
              //   background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              // />
            }
            title="灵感"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <Idea/>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-dilanxianxingiconyihuifu_huabanfuben"></i>
              // { uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }
            }
            selectedIcon={
              <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-dilanxianxingiconyihuifu_huabanfuben"></i>
              // { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}
