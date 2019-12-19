import React ,{Component } from 'react'
import {Link} from 'react-router-dom'
import store from '../store';
import {tolike,todislike} from '../actions/index';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

// import Audio from '../container/Audio';

// var userlike =[
//    '太和殿','养心殿' 
// ]

// var list =[
//     {
//         placename:'太和殿',
//         introduce:'故宫的太和殿其实也叫做金銮殿，是宫中面积最大，规格最高的宫殿。太和殿前的铜龟和铜鹤，象征着江山永固，万寿无疆。',
//         picpath:'images/dtaihe.png',
//         likeflag:'dislike'
//     },
//     {
//         placename:'坤宁宫',
//         introduce:'坤宁宫是内廷后三宫之一，始建于明永乐十八年(1420年)，正德九年(1514年)、万历二十四年(1596年)两次毁于火，万历三十三年(1605年)重建。',
//         picpath:'images/dkunning.png',
//         likeflag:'dislike'
//     },
//     {
//         placename:'养心殿',
//         introduce:'1',
//         picpath:'images/djiajv.png',
//         likeflag:'dislike'
//     },
//     {
//         placename:'延禧宫',
//         introduce:'延禧宫，为紫禁城内廷东六宫之一，位于东六宫区的东南角。建于明永乐十八年（1420年），初名长寿宫。',
//         picpath:'images/dgugong.png',
//         likeflag:'dislike'
//     },
//     {
//         placename:'寿康宫',
//         introduce:'寿康宫，北京故宫（紫禁城）内，慈宁宫西侧，是乾隆帝为自己的生母崇庆皇太后，专门修建的一组超高标准寝宫建筑群，从此这里便成为了皇太后们的主宫',
//         picpath:'images/dtaihe.png',
//         likeflag:'dislike'
//     }
// ]

export default class Gugong extends Component{
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
            value:'',
            isSearch:false
        }
    }

    componentDidMount(){
        console.log(this.state.username);
        console.log(this.tourist,this.city);

        fetch('/jdlist/?city='+this.city+'&title='+this.tourist)
        .then(res=>res.json())
        .then(res=>{
            console.log(res.message);
            // console.log(list);
            this.setState({
                placelist:res.message
            },()=>{
                this.newlist = [...this.state.placelist];
                console.log(this.state.username);
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
            })
        })
        /**
         * 获取收藏列表
         */
        // this.newlist = [...list];
        // this.newlist = [...this.state.placelist];
        // console.log(this.state.username);
        // fetch('/getlike?username='+this.state.username.loginname)
        //     .then(res=>res.json())
        //     .then(res=>{
        //         console.log(res);
        //         this.setState({
        //             userlike:res.message
        //         },()=>{
        //             console.log(this.state.userlike,this.state.placelist);  
        //             for(var i=0;i<this.newlist.length;i++){
        //                 for(var j=0;j<this.state.userlike.length;j++){
        //                     if(this.state.userlike[j] === this.newlist[i]['placename'])
        //                         this.newlist[i]['likeflag']='like';
        //                         console.log(this.newlist[i]['likeflag'],this.state.userlike[j]);
        //                 }
        //             }
        //             this.setState({
        //                 placelist:this.newlist
        //             })
        //         })
        //     });

        // this.setState({
        //     userlike:[...userlike],
        // },()=>{
        //     console.log(this.state.userlike,this.state.placelist);  
        //     for(var i=0;i<this.newlist.length;i++){
        //         for(var j=0;j<this.state.userlike.length;j++){
        //             if(this.state.userlike[j] === this.newlist[i]['placename'])
        //                 this.newlist[i]['likeflag']='like';
        //                 console.log(this.newlist[i]['likeflag'],userlike[j]);
        //         }
        //     }
        //     this.setState({
        //         placelist:this.newlist
        //     })
        // })
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
                    fetch('/like/add',{
                        method:'POST',
                        mode : 'cors',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `username=${this.state.username.loginname}&filetitle=${newlist[idx]['placename']}`
            
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        console.log(res);
                    })
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
                    fetch('/like/del',{
                        method:'POST',
                        mode : 'cors',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        body: `username=${this.state.username.loginname}&filetitle=${newlist[idx]['placename']}`
            
                    })
                    .then(res=>res.json())
                    .then(res=>{
                        console.log(res);
                    })
                })
            }
            return {
                placelist:newlist
            }
        })
        // fetch('/addlike',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json; charset=utf-8'},
        //     body: `username=${this.state.username}$filetitle=${this.state.placelist[idx]['placename']}`
        // })
        // .then(res=>res.json())
        // .then(res=>{
        //     console.log(res);
        // });
        
    }
    tosearch=()=>{
        this.props.history.push('/search');
    }
    onChange= (value) => {
        this. setState({ value }) ;
        };
        clear= () => {
        this.setState({ value:''});
        };


    render(){
        console.log(this.props.match);
        // let {tourist,city} = this.props.match.params;
        this.tourist = this.props.match.params.tourist;
        this.city=this.props.match.params.city;
        return(
            <div className='lplace'>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}><img style={{width:'20px',lineHeight:'20px'}} src={require('../images/icon/fanhui.png')}/></span>
                    <span style={{marginTop:'5%'}}>{this.tourist}</span>
                </div>
                {/* <div style={{overflow:'hidden'}} >
                    <form name="search" className="ggbar" id="search" action="">
                        <input type="search" name="find" id="find" placeholder='请输入讲解点名称'className='gginput'/>
                    </form>
                </div> */}
                <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'submit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={this.tosearch}
                    onBlur={() =>console . log( 'onBlur')}
                    onCancel={() => console.log(' onCancel')}
                    showCancelButton
                    onChange={this.onChange}
                    style={{marginTop:'15%'}}
                    />

                <div className='lplacelist'>
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