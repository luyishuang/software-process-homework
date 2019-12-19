import React,{Component} from "react"
import '../index.css'
import {Carousel ,SearchBar} from 'antd-mobile';
import{Link} from 'react-router-dom'
export default class Home extends Component{
    // openit=()=>{
    //     window.open('/home/game')
    // }

    

    render(){
        return(

            <div>
                {/* <form name="search" className="searchbar" id="search" action="">
                    <input type="search" name="find" id="find" placeholder=' 请输入目的地'className='searchinput'/>
                </form> */}
                
                <form name="search" className="searchbar" id="search" action="">
                    <Link to='/search'>
                    <input type="search" name="find" id="find" placeholder=' 请输入目的地'className='searchinput'/>
                    
                    </Link>
                </form>
                <div style={{marginTop:'18%'}}></div>
                <Carousel autoplay
                    autoplayInterval={2000}
                    infinite
                    slideHeight={0.5}
                    style={{marginTop:'10%'}}>
                    <img src={require('../images/dxian.jpg')} alt=""/>
                    <img src={require('../images/dchangbai.png')} alt=""/>
                    <img src={require('../images/dyiheyuan.png')} alt=""/>
                    <img src={require('../images/dzhangjiajie.png')} alt=""/>

                </Carousel>
                <div className="homebcc">
                    
                <Link to ='/home/game'>
                    <div className="maoxian">
                        <div className='inner'>
                            <p>故宫大冒险：</p>
                            <p>让你在游戏中了解故宫</p>
                        </div>
                    </div>
                </Link>
                <div style={{width:'100%'}}>
                    <p style={{width:'95%',float:'left',marginLeft:'3%',fontSize:'26px',}}>文章推送<a style={{float:'right',fontSize:'16px',color:'#259B24'}} href='/#/home/Tuisong'>查看更多>></a></p>
                </div>
                <Link to='/home/tuisong1/故宫的大怪兽'>
                <div className="push">
                    <div className='holeft'>
                        <p>故宫的大怪兽：不一样的文化介绍</p>
                    </div>
                    <img src={require('../images/dguaishou2.png')} alt='' className='horight'/>
                </div>
                </Link>
                <Link to='/home/tuisong1/太和殿的龙没法数'>
                <div className="push">
                    <div className='holeft'>
                        <p>太和殿的龙没法儿数</p>
                    </div>
                    <img src={require('../images/dguaishou3.png')} alt='' className='horight'/>
                </div>
                </Link>
            </div>
            
            </div>
            
        )
    }
}