import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GameArea extends Component {
  handleClickImg(index, i, e){
    if (this.props.onClickImg) {
      this.props.onClickImg(index, i)
    }
  }
  render(){
    return (
      <ul className="game">
        {this.props.imgArr.map((img, i) => {
          return (
            <li key={img.index} className={this.props.lic} onClick={this.handleClickImg.bind(this, img.index, i)}>
              <img src={img.image} alt="" />
              {this.props.sel[i] ? <div className="mask" ></div> : ''}
            </li>
          )
        })}
      </ul>
    )
  }
}

GameArea.propTypes = {
  onClickImg: PropTypes.func,
  lic: PropTypes.string,
  imgArr: PropTypes.array
}

export default GameArea