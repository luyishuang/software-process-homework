import React, { Component } from 'react';
import './css/index.css'
import Pass from './components/Pass'
import GameContainer from './containers/GameContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      step: 1
    }
  }
  handleRoute(step){
    this.setState({
      step: step
    })
  }
  render() {
    switch(this.state.step) {
      case 1:
        return (
          <GameContainer
            nextGame={this.handleRoute.bind(this, 2)} />
        )
      case 2:
        return (
          <Pass />
        )
      
    }
  }
}

export default App;
