import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from './AppHome'
import Idea from './Idea';
import Shop from './Shop'

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: "url(" + require("../img/un1.png") + ") center center /  21px 21px no-repeat"}}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: "url(" + require("../img/un11.png") + ") center center /  21px 21px no-repeat" }}
            />
            }
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
          >
            <AppHome/>
          </TabBar.Item>
          
          <TabBar.Item
           
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
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="商城"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
           <Shop/>
          </TabBar.Item>
          <TabBar.Item title='我的'
                    key='Mine'
                    icon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: "url(" + require("../img/mine1.png") + ") center center /  21px 21px no-repeat"}}
                    />}
                    selectedIcon={<div style={{
                        width: '22px',
                        height: '22px',
                        background: "url(" + require("../img/mine2.png") + ") center center /  21px 21px no-repeat" }}
                      />
                      }
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