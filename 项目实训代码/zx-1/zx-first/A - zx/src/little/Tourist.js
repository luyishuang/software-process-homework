import React,{Component} from 'react'

export default class Tourist extends Component{
    render(){
        return(
            <div>
                <div className='gghead'>
                    <a style={{float:'left',marginLeft:'3%',marginBottom:'1%',fontSize:'28px'}} href='/#/tab'>
                        <img src={require('../images/dfanhui2.png')}/>
                    </a>
                     <span style={{marginTop:'8%'}}>我的收藏</span>
                </div>
                <div className='todiv'>
                    <div className="city">
                        <div className='inner'>
                            <p className='cityp'>紫禁城<br/><br/>The Forbidden City</p>
                        </div>
                    </div>
                    <div className='minep'>
                        <br/>
                        <br/>
                        <p>已有37549人去过</p>
                        <p>中国·北京</p>
                    </div>
                </div>


                
                <div className='todiv'>
                    <div className="city2">
                        <div  className='inner'>
                            <p className='cityp'>天坛<br/><br/>Temple of Heaven</p>
                        </div>
                    </div>
                    <div className='minep'>
                        <br/>
                        <br/>
                        <p>已有33429人去过</p>
                        <p>中国·北京</p>
                    </div>
                </div>


                <div className='todiv'>
                    <div className="city5">
                        <div  className='inner'>
                            <p className='cityp'>壶口瀑布<br/><br/>Temple of Heaven</p>
                        </div>
                    </div>
                    <div className='minep'>
                        <br/>
                        <br/>
                        <p>已有16869人去过</p>
                        <p>中国·西安</p>
                    </div>
                </div>
            </div>
        )
    }
}