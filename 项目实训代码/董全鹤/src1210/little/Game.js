import React from 'react'
import {Link} from 'react-router-dom'
export default class Game extends React.Component{
    goback=()=>{
        window.history.back(-1)
    }
    render(){
        return(
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>&lt;</span>
                     <span style={{marginLeft:'30%',float:'left'}}>故宫大冒险</span>
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
            </div>
        )
    }
}