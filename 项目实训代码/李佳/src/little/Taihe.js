import React ,{Component } from 'react'
export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    componentDidMount(){
        fetch('/jdcontent/?jdtitle=太和殿')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.jdcontent
            })
        })
    }
    goback=()=>{
        window.history.back(-1)
    }
    render(){
        return(
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>&lt;</span>
                    <span style={{marginTop:'5%'}}>太和殿</span>
                </div>
                <div className='thimg'>
                    <img src={require('../images/dtaihe1.png')} className='thimgimg'/>
                    <img src={require('../images/dtaihe2.png')} className='thimgimg'/>
                    <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
                </div>
            </div>
        )
    }
}