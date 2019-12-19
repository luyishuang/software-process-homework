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
        cultername:'那达慕',
        imgpath:'images/dtaofu4.jpg'
    },
    {
        cultername:'汉服',
        imgpath:'images/dhanfu.png'
    },
    {
        cultername:'福字',
        imgpath:'images/dfu.png'
    },
]
export default class Dest extends Component{
    constructor(){
        super();
        this.state={
            cityinfor:[],
            value:'北京市',
            // list:[
            //     {
            //         name:'故宫',
            //         ename:'The Forbidden City',
            //         picpath:'images/dgugong.png'
            //     },
            //     {
            //         name:'天坛',
            //         ename:'The Forbidden City',
            //         picpath:'images/dtiantan.png'
    
            //     },
            //     {
            //         name:'天安门',
            //         ename:'The Forbidden City',
            //         picpath:'images/dtiananmen.png'
            //     },
            //     {
            //         name:'颐和园',
            //         ename:'The Forbidden City',
            //         picpath:'images/dyiheyuan.png'
            //     }
            // ],
            culterlist:[]
        }
    }

    componentDidMount(){
        var newculist = [...cl];
        console.log(this.state.value);
        fetch('/jq/?city='+this.state.value)
        .then(res=>res.json())
        .then(res=>{
            console.log(res.message);
            this.setState({
                cityinfor:res.message,
                    // culterlist:newculist
            })
        })
        // var newbj = [...bj];
        this.setState({
            // cityinfor:newbj,
            culterlist:newculist
        })
    }

    getvalue=(val)=>{
        console.log("123 "+val);
        this.setState({
            value:val
        },()=>{
            console.log(this.state.value);
            fetch('/jq/?city='+this.state.value)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    cityinfor:res.message,
                        // culterlist:newculist
                })
            })
        })
        
    }

    displayRender=(label)=>{
        return label[label.length - 1];

    }
    render(){
        
        return(
            <div>
                <form name="search" className="searchbar" id="search" action="">
                <Link to='/search'>
                    
                    <input type="search" name="find" id="find" placeholder=' 请输入目的地'className='searchinput'/>
                </Link>
                </form>
                <div className='ldestination'>
                <div style={{paddingTop:'65px'}}/>
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
                           
                        </div>
                        <div style={{marginTop:'140px',marginBottom:'20px'}}/>
                        <Casecade getvalue={this.getvalue} style={{width:'50px',height:'50px'}}/>
                    
                        
                        <div>   
                            <p style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px'}}>{this.state.value}</p>
                            {
                                this.state.cityinfor.map((item)=>(
                                    // <Link to={{pathname:'/city/'+item.name,state:{tourist:item.name}}}>
                                    <Link to={{pathname:'/city/'+this.state.value+'/'+item.title}}>
                                        <div className="city" key={item.title} style={{backgroundImage:"url('../"+item.imgpath+"')"}}>
                                            <div className='inner'>
                                                <p className='cityp'key={item.title}>{item.title}<br/><br/>{item.etitle}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }
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