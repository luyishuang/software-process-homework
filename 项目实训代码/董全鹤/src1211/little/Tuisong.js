import React ,{Component } from 'react'
export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    // componentDidMount(){
    //     fetch('')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             data:res.jdcontent
    //         })
    //     })
    // }
    backClick(){
       window.history.go(-1)
   }
    render(){
        return(
            <div className='tuisong'>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'10%',fontSize:'28px'}} onTouchStart={this.backClick}>
                        <img src={require('../images/dfanhui2.png')}/>
                    </span>
                     <span style={{fontSize:'24px',float:'left',marginLeft:'28%'}}>文章推送</span>
                </div>
                <div className='thimg'>
                    {/* <div dangerouslySetInnerHTML={{__html:this.state.data}}></div> */}
                <div className="push">
                    <div className='holeft'>
                        <p>老北京的传说：太和殿的龙没法儿数</p>
                    </div>
                    <img src={require('../images/dthlong3.png')} alt='' className='horight'/>
                </div>
                <div className="push">
                    <div className='holeft'>
                        <p>老北京的传说：太和殿的龙没法儿数</p>
                </div>
                    <img src={require('../images/dthlong3.png')} alt='' className='horight'/>
                </div>
                </div>
            </div>
        )
    }
}