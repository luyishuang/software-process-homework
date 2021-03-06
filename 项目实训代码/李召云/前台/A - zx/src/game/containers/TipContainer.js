import React, {Component} from 'react'
import {connect} from 'react-redux'

import Tip from '../components/Tip'
import {nextGame} from '../reducers/GameReducer'
const TxtAll = [
  ['青少年在家长的帮助和指导下进行网络购物，事先对商品信息或交易情况进行核实，不轻易向对方付款或提供银行卡密码，警惕网络诈骗。','青少年应该保持正常的心态进行网络交友聊天，在不了解对方的情况下应尽量避免和网友直接会面，以免被不法分子有机可乘，危及自身安全。','家长应对学生上网情况多加关心、指导和监督，并适当控制学生上网时间，避免长时间上网引起的各类病症发生。','当收到邮件、短信、电话等要求到指定的网页修改密码，或通知中奖并要求在领取奖金前先支付税金、邮费等时，务必提高警惕。'],
  ['不要随意打开不明网页链接，尤其是不良网站的链接，陌生人通过网络给自己传链接时，尽量不要打开', '网络账户和密码尽量不要相同，定期修改密码，增加密码的复杂度，不要直接用生日、电话、证件号等有关个人信息的数字作为密码', '为保障网上购物安全，尽量到知名、权威的网上商城购物，尽量通过网上第三方支付平台交易，切忌直接与卖家私下交易。', '为防范病毒或木马攻击，下载软件时尽量到官方网站或大型软件下载网站，在安装或打开来历不明的软件或文件前先杀毒。'],
  ['为保障手机支付安全，最好从官方网站下载手机支付客户端和网上商城应用，勿将资金打入陌生人账户。', '青少年要正确控制上网时间，连续上网一个小时后，最好去户外走走，放眼远望风景，注意保护眼睛。', '国家支持研究开发有利于未成年人健康成长的网络产品和服务，依法惩治利用网络从事危害未成年人身心健康的活动，为未成年人提供安全、健康的网络环境。', '任何个人和组织有权对危害网络安全的行为向网信、电信、公安等部门举报。'],
  ['网络运营者不得泄露、篡改、毁损其收集的个人信息；未经被收集者同意，不得向他人提供个人信息。', '任何个人和组织不得窃取或者以其他非法方式获取个人信息，不得非法出售或者非法向他人提供个人信息。', '任何个人和组织不得设立用于实施诈骗，传授犯罪方法，制作或者销售违禁物品、管制物品等违法犯罪活动的网站、通讯群组，不得利用网络发布与实施诈骗。', '网络运营者为用户办理相关服务时，应当要求用户提供真实身份信息。用户不提供真实身份信息的，网络运营者不得为其提供相关服务。'],
  ['任何个人和组织不得从事非法侵入他人网络、干扰他人网络正常功能、窃取网络数据等危害网络安全的活动', '境外的机构、组织、个人从事攻击、侵入、干扰、破坏等危害我国的关键信息基础设施的活动，造成严重后果的，依法追究法律责任', '发生网络安全事件，应当立即启动应急预案，进行调查和评估，要求网络运营者采取技术措施和其他必要措施，消除安全隐患，防止危害扩大，并及时向社会发布与公众有关的警示信息。', '不要在不信任的网站上留下任何个人真实信息(包括姓名、年龄、住址以及就读学校、班级等),或者把这些信息透露给其他网友。', '在网络活动中应守法自律，对网络上散播有些有害的、不实的公众信息进行分辨，不要受不良言论和信息的误导，不要参与有害和无用信息的制作和传播。']
]
const mapStateToProps = (state) => {
  return {
    stage: state.stage,
    txt: TxtAll[state.stage - 1][state.num - 1]
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    nextGame: () => {
      dispatch(nextGame())
    }
  }
}

class TipContainer extends Component{
  handleTwo(){
    this.props.nextGame()
    this.props.nextStep()
  }
  handleFinal(){
    this.props.finalStep()
  }
  render(){
    return (
      <div>
      {this.props.stage < 5
        ? <Tip
          txt={this.props.txt}
          nextGame={this.handleTwo.bind(this)} />
        : <Tip
          txt={this.props.txt}
          nextGame={this.handleFinal.bind(this)} />
      }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TipContainer)