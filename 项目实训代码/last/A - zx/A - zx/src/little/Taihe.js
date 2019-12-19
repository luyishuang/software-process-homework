import React ,{Component } from 'react';
import store from '../store';
import {tolike,todislike} from '../actions/index';
import Course from '../container/Course';

export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            username:store.getState().getuser,
            data:'',
            likeflag:'dislike',
            musicpath:'images/music/bj1.mp3',
            isPlay:false,
            userlike:[],
            placelist:[]
        }
    }
    componentDidMount(){
        fetch('/jdcontent/?jdtitle='+this.placename)
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.jdcontent
            })
        })
        fetch('/like/get?username='+this.state.username.loginname)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    userlike:res.message
                },()=>{
                    console.log(this.state.userlike);  
                    for(var i=0;i<this.state.userlike.length;i++){
                        console.log(this.state.userlike[i]);
                        if(this.state.userlike[i]===this.placename){
                            // console.log(this.placename);
                            this.setState({
                                likeflag:'like'
                            })
                        }
                    }
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
        if(this.state.likeflag === 'dislike'){
            this.setState((state)=>{
                return {
                    placelist:[...state.userlike,this.placename],
                    likeflag:'like'
                }
            },()=>{
                console.log(this.state.userlike);
                console.log(this.props.match.params.placename);

                fetch('/like/add',{
                    method:'POST',
                    mode : 'cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `username=${this.state.username.loginname}&filetitle=${this.props.match.params.placename}`
        
                })
                .then(res=>res.json())
                .then(res=>{
                    console.log(res);
                })
            })
        }else if(this.state.likeflag === 'like'){
            var old = [...this.state.userlike];
            var newuserlike = old.splice(old.indexOf(this.placename),1);
            this.setState({
                likeflag:'dislike',
                userlike:newuserlike
            },()=>{
                fetch('/like/del',{
                    method:'POST',
                    mode : 'cors',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: `username=${this.state.username.loginname}&filetitle=${this.props.match.params.placename}`
        
                })
                .then(res=>res.json())
                .then(res=>{
                    console.log(res);
                })
            })
            
        }
        console.log(this.state.userlike);
        
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
                    {/* <img src='../images/dtaihe1.png' className='thimgimg'/>
                    <img src='../images/dtaihe2.png' className='thimgimg'/> */}
                    <div style={{width:'100%',height:'150px', overFlow:'hidden'}}>
                        <Course />
                    </div>
                    <div dangerouslySetInnerHTML={{__html:this.state.data}} style={{marginTop:'20%'}}></div>
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