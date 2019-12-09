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
                <view className="search-wrapper">
                    <form className="search-input-wrapper ">
                    <input type="search" name="find" id="find" placeholder=' 请输入目的地'className='searchinput'/>
                    </form>
                </view>
                <Carousel autoplay
                    autoplayInterval={2000}
                    infinite
                    slideHeight={0.5}
                    style={{marginTop:'64px'}}>
                    <img src={require('../images/dxian.jpg')} alt=""/>
                    <img src={require('../images/dchangbai.png')} alt=""/>
                    <img src={require('../images/dyiheyuan.png')} alt=""/>
                    <img src={require('../images/dzhangjiajie.png')} alt=""/>

                </Carousel>
                <Link to ='/home/game'>
                <div className="push">
                    <div className='holeft' >
                        <p>故宫大冒险：</p>
                        <p>让你在游戏中了解故宫</p>
                        <p style={{fontSize:'16px',color:"blue"}}> 点击这里开始冒险吧！</p>
                        
                    </div>
                    <img src={require('../images/dye.png')} alt='' className='horight' />
                </div>
                </Link>
                <Link to='/home/zuixiao'>
                <div className="push">
                    <div className='holeft'>
                        <p>故宫的大怪兽：</p>
                        <p>不为人所知的另一面</p>
                        <p style={{fontSize:'16px',color:"gray",marginLeft:'7%'}}>2019/10/24</p>
                        <p style={{fontSize:'16px',color:"gray",marginLeft:'7%'}}>作者：王睿</p>
                    </div>
                    <img src={require('../images/dguaishou1.png')} alt='' className='horight'/>
                </div>
                </Link>
                <Link>
                <div className="push">
                    <div className='holeft'>
                        <p>老北京的传说：</p>
                        <p>太和殿的龙没法儿数</p>
                        <p style={{fontSize:'16px',color:"gray",marginLeft:'7%'}}>2019/11/11</p>
                        <p style={{fontSize:'16px',color:"gray",marginLeft:'7%'}}>作者：杨晓凡</p>
                    </div>
                    <img src={require('../images/dthlong2.png')} alt='' className='horight'/>
                </div>
                </Link>
            </div>
            
        )
    }
}