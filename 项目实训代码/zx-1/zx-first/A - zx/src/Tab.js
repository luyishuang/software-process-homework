import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './container/Home';
import Dest from './container/Destination'
import Community from './container/Community';
import Mine from './container/Mine';
export default class AppTab extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'community',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#2f2f4f"
          barTintColor="white"
        >
          <TabBar.Item
              title='首页'
              key='Home'
              icon={<div style={{
                size:'20px',
                  width: '22px',
                  height: '22px',
                  background: "url(" + require("./images/dhome1.png") + ") center center /  21px 21px no-repeat"}}
              />}
              selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: "url(" + require("./images/dhome3.png") + ") center center /  21px 21px no-repeat" }}
              />}
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <Home/>
          </TabBar.Item>
          <TabBar.Item
              title='目的地'
              key='Destination'
              icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: "url(" + require("./images/ddest1.png") + ") center center /  21px 21px no-repeat"}}
              />}
              selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: "url(" + require("./images/ddest3.png") + ") center center /  21px 21px no-repeat" }}
                />
                }
            selected={this.state.selectedTab === 'destination'}
            onPress={() => {
              this.setState({
                selectedTab: 'destination',
              });
            }}
          >
            <Dest/>
          </TabBar.Item>
          <TabBar.Item title='社区'
              key='Community'
              icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: "url(" + require("./images/dagency1.png") + ") center center /  21px 21px no-repeat"}}
              />}
              selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: "url(" + require("./images/dagency3.png") + ") center center /  21px 21px no-repeat"}}
                />
                }
            selected={this.state.selectedTab === 'community'}
            onPress={() => {
              this.setState({
                selectedTab: 'community',
              });
            }}
          >
            <Community/>
          </TabBar.Item>
          <TabBar.Item title='我的'
              key='Mine'
              icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: "url(" + require("./images/dmine1.png") + ") center center /  21px 21px no-repeat"}}
              />}
              selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: "url(" + require("./images/dmine3.png") + ") center center /  21px 21px no-repeat" }}
                />}
            selected={this.state.selectedTab === 'mine'}
            onPress={() => {
              this.setState({
                selectedTab: 'mine',
              });
            }}
          >
            <Mine/>
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}