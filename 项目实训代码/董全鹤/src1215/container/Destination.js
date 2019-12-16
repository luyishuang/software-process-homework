import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import { PickerView, WhiteSpace } from 'antd-mobile';
import Casecade from './Casecade';

const bj = [
    {
        cityname:'北京市',
        list:[
            {
                name:'紫禁城',
                ename:'The Forbidden City',
                picpath:'images/dgugong.png'
            },
            {
                name:'天坛',
                ename:'The Forbidden City',
                picpath:'images/dtiantan.png'

            },
            {
                name:'天安门',
                ename:'The Forbidden City',
                picpath:'images/dtiananmen.png'
            },
            {
                name:'颐和园',
                ename:'The Forbidden City',
                picpath:'images/dyiheyuan.png'
            }
        ]

    },
    {
        cityname:'西安',
        list:[
            {
                name:'紫',
                ename:'The Forbidden City',
                picpath:'images/dgugong.png'
            },
            {
                name:'天坛',
                ename:'The Forbidden City',
                picpath:'images/dtiantan.png'

            },
            {
                name:'门',
                ename:'The Forbidden City',
                picpath:'images/dtiananmen.png'
            },
            {
                name:'园',
                ename:'The Forbidden City',
                picpath:'images/dyiheyuan.png'
            },
            {
                name:'紫',
                ename:'The Forbidden City',
                picpath:'images/dgugong.png'
            },
            {
                name:'天坛',
                ename:'The Forbidden City',
                picpath:'images/dtiantan.png'

            },
            {
                name:'门',
                ename:'The Forbidden City',
                picpath:'images/dtiananmen.png'
            },
            {
                name:'园',
                ename:'The Forbidden City',
                picpath:'images/dyiheyuan.png'
            }
        ]

    }
    
];
var cl = [
    {
        cultername:'桃符',
        imgpath:'images/dtaofu4.jpg'
    },
    {
        cultername:'汉服',
        imgpath:'images/dhanfu.png'
    },
    {
        cultername:'“福”字',
        imgpath:'images/dfu.png'
    },
]
export default class Dest extends Component{
    constructor(){
        super();
        this.state={
            cityinfor:[],
            value:'',
            list:[
                {
                    name:'故宫',
                    ename:'The Forbidden City',
                    picpath:'images/dgugong.png'
                },
                {
                    name:'天坛',
                    ename:'The Forbidden City',
                    picpath:'images/dtiantan.png'
    
                },
                {
                    name:'天安门',
                    ename:'The Forbidden City',
                    picpath:'images/dtiananmen.png'
                },
                {
                    name:'颐和园',
                    ename:'The Forbidden City',
                    picpath:'images/dyiheyuan.png'
                }, 
                {
                    name:'紫禁城',
                    ename:'The Forbidden City',
                    picpath:'images/dgugong.png'
                },
                {
                    name:'天坛',
                    ename:'The Forbidden City',
                    picpath:'images/dtiantan.png'
    
                },
            ],
            culterlist:[]
        }
    }

    componentDidMount(){
        // fetch('/jq/?city=北京')
        // .then(res=>res.json())
        // .then(res=>{
        //     this.setState({
        //         cityinfor:res
        //     })
        // })
        var newbj = [...bj];
        var newculist = [...cl];
        this.setState({
            cityinfor:newbj,
            culterlist:newculist
        })
    }

    getvalue=(val)=>{
        console.log("123 "+val);
        this.state.cityinfor.map((item)=>{
            if(item.cityname === val){
                this.setState({
                    list:item.list
                })
            }
        })
        this.setState({
            value:val
        })
        
    }

    displayRender=(label)=>{
        return label[label.length - 1];

    }
    render(){
        
        return(
            <div>
                <form name="search" className="searchbar" id="search" action="">
                    <input type="search" name="find" id="find" placeholder=' 请输入目的地'className='searchinput'/>
                </form>
                <div className='ldestination'>
                    <div className="dest">
                        <p >
                            <span style={{fontWeight:'bold',fontSize:'20px'}}>风俗文化介绍</span>
                            <Link to='/culter'>
                                <span style={{float:'right',lineHeight:'22px',paddingRight:'2%'}}>
                                    <span style={{lineHeight:'22px'}}>查看更多</span> 
                                    <img style={{width:'12px',lineHeight:'22px'}} src='../images/icon/gengduo.png'/> 
                                </span>
                            </Link>
                        </p>
                        <div style={{textAlign:'center'}}>
                            {
                                this.state.culterlist.map((item)=>(
                                    <div className='hot' style={{backgroundImage:"url('./"+item.imgpath+"')"}}>
                                        <Link to={'/culter/'+item.cultername}>
                                            <div className='inner'>
                                                <p>{item.cultername}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                           
                            {/* <div className="hot2">
                                <div className='inner'>
                                    <p>汉服</p>
                                </div>
                            </div>
                            <div className="hot3" >
                                <div className='inner'>
                                    <p>“福”字</p>
                                </div>
                            </div> */}
                        </div>
                        
                        <div style={{height:'140px'}}></div>
                        <Casecade getvalue={this.getvalue} style={{width:'50px',height:'50px'}}/>
                    
                        
                        <div>   
                            <p style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px'}}>{this.state.value}</p>
                            {
                                this.state.list.map((item)=>(
                                    // <Link to={{pathname:'/city/'+item.name,state:{tourist:item.name}}}>
                                    <Link to={{pathname:'/city/'+this.state.value+'/'+item.name}}>
                                        <div className="city" key={item.cityname} style={{backgroundImage:"url('../"+item.picpath+"')"}}>
                                            <div className='inner'>
                                                <p className='cityp'key={item.name}>{item.name}<br/><br/>{item.ename}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
                            {/* <Link to='/gugong'>
                                <div className="city">
                                <div className='inner'>
                                    <p className='cityp'>紫禁城<br/><br/>The Forbidden City</p>
                                </div>
                                </div>
                            </Link> */}
                            {/* <div className="city2">
                            <div  className='inner'>
                                <p className='cityp'>天坛<br/><br/>Temple of Heaven</p>
                            </div>
                            </div>
                            <div className="city3">
                            <div  className='inner'>
                                <p className='cityp'>天安门<br/><br/>Tian An Men</p>
                            </div>
                                
                            </div>
                            <div className="city4">
                            <div  className='inner'>
                                <p className='cityp'>颐和园<br/><br/>Summer Palace</p>
                            </div> */}
                                
                            </div>
                        </div>


                        {/* <div className="country">   
                            <h3>西安</h3>
                            <div className="city5">
                            <div className='inner'>
                                <p className='cityp'>壶口瀑布<br/><br/>Hukou Waterfall</p>
                            </div>
                                
                            </div>
                            <div className="city6">
                            <div  className='inner'>
                                <p className='cityp'>华清宫<br/><br/>Huaqing Palace</p>
                            </div>
                            </div>
                            <div className="city7">
                            <div  className='inner'>
                                <p className='cityp'>南泥湾<br/><br/>Nan Ni Wan</p>
                            </div>
                                
                            </div>
                            <div className="city8">
                            <div  className='inner'>
                                <p className='cityp'>秦始皇陵<br/>The Mausoleum of Emperor Qinshihuang</p>
                            </div>
                                
                            </div>
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        )
    }
}