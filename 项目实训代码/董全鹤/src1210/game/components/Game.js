import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GameThumb from './GameThumb'
import GameArea from './GameArea'

import bg from '../images/pic02.jpg'

class Game extends Component{
  constructor() {
    super()
    this.state = {
      stage: 1,
      num: 0,
      imgArr: [],
      selImg: [],
      selCls: [],
      sucArr: [],
      lic: '',
      thumb: '',
    }
  }

  static defaultProps = {
    stage: 1
  }

  componentWillMount(){
    this.setState({
      stage: this.props.stage,
      num: this.props.num,
    }, function(){
      this._initImg()
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      stage: nextProps.stage
    }, function(){
      this._initImg()
    })
  }

  _initImg(){
    let iniArr = []
    let selCls = []
    switch(this.state.stage){
      case 1:
        iniArr = [1, 2, 3, 4]
        selCls = [0, 0, 0, 0]
        break
      case 2:
        iniArr = [1, 2, 3, 4, 5, 6]
        selCls = [0, 0, 0, 0, 0, 0]
        break
      case 1:
        iniArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        selCls = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        break
      case 4:
        iniArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        selCls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        break
      case 5:
        iniArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        selCls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        break
      default:
        iniArr = [1, 2, 3, 4]
        selCls = [0, 0, 0, 0]
    }
    this.setState({
      selCls: selCls,
      lic: 'lic' + this.state.stage,
      sucArr: iniArr.slice(0)
    }, function(){
      this.setState({
        thumb: require('../images/stage1/'+'1.jpg'),
      })
      let tmpImgArr = []
      iniArr.sort(() => {
        return Math.random() - 0.5
      })
      iniArr.forEach((i) => {
        tmpImgArr.push({
          'image': require('../images/stage1/'+'1-'+i+'.jpg'),
          'index': i
        })
      })
      this.setState({
        imgArr: tmpImgArr
      })
    })
  }
  _nextGame(){
    if (this.props.onNextGame) {
      setTimeout(() => {
        this.props.onNextGame()
      }, 500)
    }
  }

  handleClickImg(index, i){
    if (this.state.selImg.length === 0) {
      let tmpSelCls = this.state.selCls.slice(0)
      tmpSelCls[i] = 1
      this.setState({
        selImg: [index, i],
        selCls: tmpSelCls
      })
    }else{
      let tmpImgArr = this.state.imgArr.slice(0)
      let tmpSelCls = this.state.selCls.slice(0)
      tmpSelCls[this.state.selImg[1]] = 0
      tmpImgArr[i] = {
        'image': require('../images/stage1/'+'1-'+this.state.selImg[0]+'.jpg'),
        'index': this.state.selImg[0]
      }
      tmpImgArr[this.state.selImg[1]] = {
        'image': require('../images/stage1/'+'1-'+index+'.jpg'),
        'index': index
      }
      this.setState({
        imgArr: tmpImgArr,
        selImg: [],
        selCls: tmpSelCls
      }, function(){
        let newArr = tmpImgArr.map((t) => {
          return t.index
        })
        if (newArr.join('') === this.state.sucArr.join('')) {
          this._nextGame()
        }
      })
    }
  }

  render(){
    return (
      <div className="bg">
        <div className='gghead2'>
          <a style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} href='/home/game'>&lt;</a>
            <span style={{marginLeft:'35%',float:'left'}}>曲水流觞</span>
        </div>
        <GameArea
          imgArr={this.state.imgArr}
          lic={this.state.lic}
          sel={this.state.selCls}
          onClickImg={this.handleClickImg.bind(this)} />
          <div className="thumbnail"><GameThumb thumb={this.state.thumb} /></div>
      </div>
    )
  }
}

Game.propTypes = {
  stage: PropTypes.number
}

export default Game