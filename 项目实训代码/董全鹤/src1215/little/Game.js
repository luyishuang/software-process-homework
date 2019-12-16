import React from 'react'
import {Link} from 'react-router-dom'
export default class Game extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:'#fdfbf4'}}>
                <div className='gghead2'>
                    <a style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} href='/#/tab'>
                        <img src={require('../images/dfanhui2.png')} className="fanhui"/>
                    </a>
                    <span>故宫大冒险</span>
                </div>
                <div style={{marginTop:'20%'}}></div>
                <div className='gameth'>
                    <div className='gmimg'>
                    <p className='gmimgp'>太和殿上的脊兽</p>
                    </div>
                </div>
                <Link to="/home/game1/qvshui">
                <div className='gameth'>
                    <div className='gmimg2'>
                    <p className='gmimgp'>曲水流觞</p>
                    </div>
                </div>
                </Link>
                <div className='bcgame'></div>
            </div>
        )
    }
}