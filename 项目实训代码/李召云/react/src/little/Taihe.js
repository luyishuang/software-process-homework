import React ,{Component } from 'react'
export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            data:'',
            likeinitial:['images/icon/xihuan2.png','images/icon/xihuan.png'],
            likeflag:'dislike'
        }
    }
    componentDidMount(){
        // fetch('/jdcontent/?jdtitle=太和殿')
        // .then(res=>res.json())
        // .then(res=>{
        //     this.setState({
        //         data:res.jdcontent
        //     })
        // })
    }
    goback=()=>{
        window.history.back(-1)
    }
    addlike=()=>{
        if(this.state.likeflag === 'dislike'){
            this.setState({

                    likeflag:'like'
                
            })
        }else{
            this.setState({
                    likeflag:'dislike'
            })
        }
        console.log(this.state.likeflag,this.state.likeinitial);
        
    }
    render(){
        let placename = this.props.match.params.placename;
        console.log(this.props);
        return(
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>&lt;</span>
                    <span style={{marginTop:'5%'}}>{placename}</span>
                    <span flage={this.state.likeflag} onClick={this.addlike} style={{width:'22px'}}>
                        <img className={this.state.likeflag == 'like'?'lhidden':'lshow'} style={{width:'22px',lineHeight:'20px',position:'fixed',right:'3%',top:'2%'}} src='../images/icon/xihuan2.png'/>
                        <img className={this.state.likeflag == 'like'?'lshow':'lhidden'}  style={{width:'26px',lineHeight:'26px',position:'fixed',right:'3%',top:'2%'}} src='../images/icon/xihuan.png'/>
                    </span>
                </div>
                <div className='thimg'>
                    <img src='../images/dtaihe1.png' className='thimgimg'/>
                    <img src='../images/dtaihe2.png' className='thimgimg'/>
                    <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
                </div>
            </div>
        )
    }
}