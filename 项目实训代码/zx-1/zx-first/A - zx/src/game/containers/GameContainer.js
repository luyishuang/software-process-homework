import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Game from '../components/Game'

import {initGame} from '../reducers/GameReducer'

class GameContainer extends Component{
  componentWillMount(){
    this._loadGame()
  }

  _loadGame(){
    this.props.initGame()
  }

  handleNextGame(){
    if (this.props.nextGame) {
      this.props.nextGame()
    }
  }

  render(){
    return (
      <Game
        stage={this.props.stage}
        num = {this.props.num}
        onNextGame={this.handleNextGame.bind(this)} />
    )
  }
}
GameContainer.propTypes = {
  stage: PropTypes.number,
  num: PropTypes.number
}

const mapStateToProps = (state) => {
  return {
    stage: state.stage,
    num: state.num
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initGame: () => {
      dispatch(initGame())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer)