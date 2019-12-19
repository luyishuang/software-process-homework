import React ,{Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../store';
import {tolike,todislike} from '../actions/index'
// import Audio from '../container/Audio';

var userlike =[
   '太和殿','养心殿' 
]

var list =[
    {
        placename:'太和殿',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'images/dtaihe.png',
        likeflag:'dislike'
    },
    {
        placename:'坤宁宫',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'images/dkunning.png',
        likeflag:'dislike'
    },
    {
        placename:'养心殿',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'images/djiajv.png',
        likeflag:'dislike'
    },
    {
        placename:'延禧宫',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'images/dgugong.png',
        likeflag:'dislike'
    },
    {
        placename:'寿康宫',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'images/dtaihe.png',
        likeflag:'dislike'
    }
]

export default class Tourist extends Component{
    constructor(){
        super();
        this.state={
            username:store.getState().getuser,
            placelist:[],
            initiallike:'/images/icon/xihuan.png',
            musicpath:'images/music/bj1.mp3',
            isPlay:false,
            searchContent:'',
            userlike:[],
        }
    }

    componentDidMount(){
        console.log(this.state.username);
        console.log(this.tourist,this.city);

        // this.newlist = [...list];
        fetch('/like/get/?username='+this.state.username.loginname)
                    .then(res=>res.json())
                    .then(res=>{
                        console.log(res);
                        this.setState({
                            userlike:res.message
                        },()=>{
                            console.log(this.state.userlike,this.state.placelist);  
                            for(var i=0;i<this.newlist.length;i++){
                                for(var j=0;j<this.state.userlike.length;j++){
                                    if(this.state.userlike[j] === this.newlist[i]['placename'])
                                        this.newlist[i]['likeflag']='like';
                                        console.log(this.newlist[i]['likeflag'],this.state.userlike[j]);
                                }
                            }
                            this.setState({
                                placelist:this.newlist
                            })
                        })
                    });

        
    }

    

    goback=()=>{
        window.history.back(-1)
    }

    addlike=(idx)=>{
        console.log(this.state.userlike);
        this.setState((state)=>{
            let newlist= [...state.placelist];
            let newuserlike = [...state.userlike];
            if(newlist[idx]['likeflag'] === 'dislike'){
                newlist[idx]['likeflag'] = 'like';
                newuserlike.push(newlist[idx]['placename']);
                this.setState({
                    userlike:newuserlike
                },()=>{
                    console.log(this.state.userlike);
                })
            }
            else if(newlist[idx]['likeflag']==='like'){
                newlist[idx]['likeflag'] ='dislike';
                // var changeuserlike = [...newuserlike];
                // changeuserlike.splice(changeuserlike.indexOf(newlist[idx]['placename']))
                newuserlike.splice(newuserlike.indexOf(newlist[idx]['placename']),1);
                
                this.setState({
                        userlike:newuserlike
                },()=>{
                    console.log(this.state.userlike);
                })
            }
            return {
                placelist:newlist
            }
        })
    }
    render(){
        console.log(this.props.match);
        // let {tourist,city} = this.props.match.params;
        this.tourist = this.props.match.params.tourist;
        this.city=this.props.match.params.city;
        return(
            <div className='tobc'>
                <div className='tohead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}><img style={{width:'20px',lineHeight:'20px'}} src={require('../images/icon/fanhui.png')}/></span>
                    <span style={{marginTop:'5%'}}>我的收藏</span>
                </div>

                <div style={{marginTop:'16%'}}>
                    {
                        this.state.placelist.map((item,idx)=>(
                            <div className='ggsmall'>
                                <div className='ggleft'>
                                    <img src={'../'+item.picpath} className='ggimg' />
                                </div>
                                <Link to={'/place/'+item.placename}>
                                    <div className='ggright'>
                                        <div className='ggritop'>
                                            <p>{item.placename}</p>
                                            <span style={{color:'black'}}>{item.introduce}</span>
                                        </div>
                                        <hr/>
                                        
                                    </div>
                                </Link>
                                <div className='ggribot' onClick={()=>this.addlike(idx)}>
                                    <span flage={item.likeflag} className='ggbottou' style={{width:'22px'}}>
                                        <img className={item.likeflag == 'like'?'lhidden':'lshow'} style={{width:'22px',lineHeight:'20px'}} src='../images/icon/xihuan2.png'/>
                                        <img className={item.likeflag == 'like'?'lshow':'lhidden'}  style={{width:'26px',lineHeight:'26px'}} src='../images/icon/xihuan.png'/>
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                    

                </div>
            </div>
        )
    }
}