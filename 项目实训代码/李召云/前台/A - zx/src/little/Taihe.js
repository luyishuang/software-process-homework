import React ,{Component } from 'react';
import store from '../store';
import {tolike,todislike} from '../actions/index';

export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            username:store.getState().getuser,
            data:'',
            likeflag:'',
            musicpath:'images/music/bj1.mp3',
            isPlay:false,
            userlike:[]
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
        fetch('/getlike?username='+this.state.username.loginname)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    userlike:res.message
                },()=>{
                    console.log(this.state.userlike);  
                    for(var i=0;i<this.state.userlike.length;i++){
                        if(this.state.userlike[i]===this.placename){
                            console.log(this.placename);

                            this.setState({
                                likeflag:'like'
                            })
                        }
                    }
                    console.log(this.placename);
                    
                })
            });
        // this.changelike=store.subscribe(()=>{
        //     this.setState({
        //         likeflag:store.getState().changelike
        //     })
        //     console.log(this.state.likeflag);
        // })
    }
    // componentWillUnmount(){
    //     this.changelike();
    // }
    
    goback=()=>{
        window.history.back(-1)
    }
    addlike=()=>{
        
        // if(this.state.likeflag === 'dislike'){
        //     store.dispatch(tolike('like'));
            
        // }else{
        //     store.dispatch(todislike('dislike'));
        // }
        // console.log(this.state.likeflag,this.state.likeinitial);
        
    }
    render(){
        this.placename = this.props.match.params.placename;
        console.log(this.props);
        return(
            <div>
                <div className='gghead'>
                    {/* <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>&lt;</span> */}
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}><img style={{width:'20px',lineHeight:'20px'}} src={require('../images/icon/fanhui.png')}/></span>

                    <span style={{marginTop:'5%'}}>{this.placename}</span>
                    <span flage={this.state.likeflag} onClick={this.addlike} style={{width:'22px'}}>
                        <img className={this.state.likeflag == 'like'?'lhidden':'lshow'} style={{width:'22px',lineHeight:'20px',position:'fixed',right:'3%',top:'2%'}} src='../images/icon/xihuan2.png'/>
                        <img className={this.state.likeflag == 'like'?'lshow':'lhidden'}  style={{width:'26px',lineHeight:'26px',position:'fixed',right:'3%',top:'2%'}} src='../images/icon/xihuan.png'/>
                    </span>
                </div>
                
                <div className='thimg'>
                    <img src='../images/dtaihe1.png' className='thimgimg'/>
                    <img src='../images/dtaihe2.png' className='thimgimg'/>
                    <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
                    <div className='lspeak'>
                    <audio  controls  style={{width:'100%',backgroundColor:'teal'}}>
                        <source src={'../'+this.state.musicpath} style={{backgroundColor:'teal'}}/>
                    </audio>
                </div>
                </div>
                
            </div>
        )
    }
}