import React, {Component} from 'react'

class Pass extends Component{
  render() {
    return (
      <div style={{textAlign:"center", backgroundColor:'#fdfbf4',paddingBottom:'60%'}}>
        <div className='gghead2'>
          <a style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} href='/#/home/game'>
            <img src={require('../../images/dfanhui2.png')} className="fanhui"/>
          </a>
            <span>曲水流觞</span>
        </div>
          <img src={require('../images/guoguan2.gif')} style={{width:'60%',marginLeft:'20%',marginTop:"60%"}}/>
      </div>
    )
  }
}

export default Pass