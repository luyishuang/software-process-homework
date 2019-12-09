import React,{Component} from 'react'

export default class Tourist extends Component{
    goback=()=>{
        window.history.back(-1)
    }
    render(){
        return(
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>&lt;</span>
                     <span style={{marginTop:'5%'}}>游玩记录</span>
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