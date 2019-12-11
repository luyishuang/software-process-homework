import React, {Component} from 'react'
import PropTypes from 'prop-types'

import bg from '../images/pic03.jpg'
import next from '../images/img04.png'

class Tip extends Component{
  handleNext(){
    if (this.props.nextGame) {
      this.props.nextGame()
    }
  }
  render(){
    return (
      <div className="bg">
        <img src={bg} alt="bg" />
        <div className="txt">{this.props.txt}</div>
        <div className="next" onClick={this.handleNext.bind(this)}>
          <img src={next} alt="next" />
        </div>
      </div>
    )
  }
}

Tip.PropTypes = {
  txt: PropTypes.string,
  nextGame: PropTypes.func
}

export default Tip