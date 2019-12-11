import React ,{Component } from 'react'
import {Link} from 'react-router-dom'

const list =[
    {
        placename:'太和殿',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'../images/dtouxiang1.png'
    },
    {
        placename:'坤宁宫',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'../images/dtouxiang1.png'
    },
    {
        placename:'坤宁宫',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'../images/dtouxiang1.png'
    },
    {
        placename:'太和殿',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'../images/dtouxiang1.png'
    },
    {
        placename:'太和殿',
        introduce:'太和殿俗称金銮殿,为中国古代宫殿建筑之精华,东方三大殿之一.中国现存最大的木结构大殿。',
        picpath:'../images/dtouxiang1.png'
    }
]

export default class Gugong extends Component{
    constructor(){
        super();
        this.state={
            placelist:[],
            initiallike:'/images/icon/xihuan.png',
            likeflag:'dislike'
        }
    }

    componentDidMount(){
        var newlist = [...list];
        this.setState({
            placelist:newlist
        })
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
        let {tourist} = this.props.location.state;
        return(
            <div className='lplace'>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}><img style={{width:'20px',lineHeight:'20px'}} src={require('../images/icon/fanhui.png')}/></span>
                    <span style={{marginTop:'5%'}}>{tourist}</span>
                </div>
                <div style={{overflow:'hidden'}}>
                    <form name="search" className="ggbar" id="search" action="">
                        <input type="search" name="find" id="find" placeholder='请输入讲解点名称'className='gginput'/>
                    </form>
                </div>

                <div className='lplacelist'>
                    {
                        this.state.placelist.map((item)=>(
                            <div className='ggsmall'>
                                <div className='ggleft'>
                                    <img src={require('../images/dtaihe.png')} className='ggimg' />
                                </div>
                                <Link to={'/place/'+item.placename}>
                                <div className='ggright'>
                                    <div className='ggritop'>
                                    <p>{item.placename}</p>
                                    <span style={{color:'black'}}>{item.introduce}</span>
                                    </div>
                                    <hr/>
                                    <div className='ggribot'>
                                        <img src={require('../images/dting.png')}className='ggbotimg' />
                                        {/* <img src={require('../images/icon/xihuan.png')} className='ggbottou' /> */}
                                        <span flage={this.state.likeflag} className='ggbottou'  onClick={this.addlike} style={{width:'22px'}}>
                                            <img className={this.state.likeflag == 'like'?'lhidden':'lshow'} style={{width:'22px',lineHeight:'20px'}} src='../images/icon/xihuan2.png'/>
                                            <img className={this.state.likeflag == 'like'?'lshow':'lhidden'}  style={{width:'26px',lineHeight:'26px'}} src='../images/icon/xihuan.png'/>
                                        </span>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))
                    }
                    

                    {/* <div className='ggsmall'>
                        <div className='ggleft'>
                            <img src={require('../images/dkunning.png')} className='ggimg' />
                        </div>
                        <div className='ggright'>
                            <div className='ggritop'>
                            <p>2、坤宁宫</p>
                            <span>坤宁宫为中国古代宫殿建筑之精华.属于北京故宫内廷后三宫之一,位于交泰殿后面.</span>
                            </div>
                            <hr/>
                            <div className='ggribot'>
                                <img src={require('../images/dting.png')}className='ggbotimg' />
                                <img src={require('../images/dtouxiang1.png')}className='ggbottou' />
                            </div>
                        </div>  
                    </div>
                    <div className='ggsmall'>
                        <div className='ggleft'>
                            <img src={require('../images/dkunning.png')} className='ggimg' />
                        </div>
                        <div className='ggright'>
                            <div className='ggritop'>
                            <p>2、坤宁宫</p>
                            <span>坤宁宫为中国古代宫殿建筑之精华.属于北京故宫内廷后三宫之一,位于交泰殿后面.</span>
                            </div>
                            <hr/>
                            <div className='ggribot'>
                                <img src={require('../images/dting.png')}className='ggbotimg' />
                                <img src={require('../images/dtouxiang1.png')}className='ggbottou' />
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        )
    }
}