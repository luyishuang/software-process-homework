import React, { Component } from 'react'
import PropTypes from 'prop-types'

class GameThumb extends Component {
  render(){
    return (
      <img src={this.props.thumb} alt="thumb" />
    )
  }
}
GameThumb.propTypes = {
  thumb: PropTypes.string
}

export default GameThumb