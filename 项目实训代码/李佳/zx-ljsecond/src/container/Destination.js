import React ,{Component} from 'react'

export default class Dest extends Component{
    render(){
        return(
            <div style={{marginTop:'70px'}}>
                <view className="search-wrapper">
                    <form className="search-input-wrapper ">
                    <input type="search" name="find" id="find" placeholder=' 请输入目的地'className='searchinput'/>
                    </form>
                </view>
                <div className="dest">
                    <p style={{fontWeight:'bold',fontSize:'20px',paddingLeft:"20px"}}>风俗文化介绍</p>
                    <div style={{textAlign:'center'}}>
                        <div className="hot">
                            <div className='inner'>
                                <p>桃符</p>
                            </div>
                            
                        </div>
                        <div className="hot2">
                            <div className='inner'>
                                <p>汉服</p>
                            </div>
                        </div>
                         <div className="hot3" >
                             <div className='inner'>
                                <p>“福”字</p>
                             </div>
                        </div>
                    </div>
                    <div className="country" >   
                        <p style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px'}}>北京</p>
                        <a href='/destination/gugong'>
                        <div className="city">
                        <div className='inner'>
                            <p className='cityp'>紫禁城<br/><br/>The Forbidden City</p>
                        </div>
                        </div>
                        </a>
                        <div className="city2">
                        <div  className='inner'>
                            <p className='cityp'>天坛<br/><br/>Temple of Heaven</p>
                        </div>
                        </div>
                        <div className="city3">
                        <div  className='inner'>
                            <p className='cityp'>天安门<br/><br/>Tian An Men</p>
                        </div>
                            
                        </div>
                        <div className="city4">
                        <div  className='inner'>
                            <p className='cityp'>颐和园<br/><br/>Summer Palace</p>
                        </div>
                            
                        </div>
                    </div>


                    <div className="country">   
                        <h3>西安</h3>
                        <div className="city5">
                        <div className='inner'>
                            <p className='cityp'>壶口瀑布<br/><br/>Hukou Waterfall</p>
                        </div>
                            
                        </div>
                        <div className="city6">
                        <div  className='inner'>
                            <p className='cityp'>华清宫<br/><br/>Huaqing Palace</p>
                        </div>
                        </div>
                        <div className="city7">
                        <div  className='inner'>
                            <p className='cityp'>南泥湾<br/><br/>Nan Ni Wan</p>
                        </div>
                            
                        </div>
                        <div className="city8">
                        <div  className='inner'>
                            <p className='cityp'>秦始皇陵<br/>The Mausoleum of Emperor Qinshihuang</p>
                        </div>
                            
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}