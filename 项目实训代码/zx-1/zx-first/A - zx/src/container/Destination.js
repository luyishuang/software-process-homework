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
                picpath:'./images/dgugong.png'
            },
            {
                name:'天坛',
                ename:'The Forbidden City',
                picpath:'./images/dtiantan.png'

            },
            {
                name:'天安门',
                ename:'The Forbidden City',
                picpath:'./images/dtiananmen.png'
            },
            {
                name:'颐和园',
                ename:'The Forbidden City',
                picpath:'./images/dyiheyuan.png'
            }
        ]

    },
    {
        cityname:'西安',
        list:[
            {
                name:'紫',
                ename:'The Forbidden City'
            },
            {
                name:'天',
                ename:'The Forbidden City'
            },
            {
                name:'安门',
                ename:'The Forbidden City'
            },
            {
                name:'颐',
                ename:'The Forbidden City'
            }
        ]

    }
    
]
export default class Dest extends Component{
    constructor(){
        super();
        this.state={
            cityinfor:[],
            value:'',
            list:[
                {
                    name:'紫禁城',
                    ename:'The Forbidden City',
                    picpath:'./images/dgugong.png'
                },
                {
                    name:'天坛',
                    ename:'The Forbidden City',
                    picpath:'./images/dtiantan.png'
    
                },
                {
                    name:'天安门',
                    ename:'The Forbidden City',
                    picpath:'./images/dtiananmen.png'
                },
                {
                    name:'颐和园',
                    ename:'The Forbidden City',
                    picpath:'./images/dyiheyuan.png'
                }
            ]
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
        this.setState({
            cityinfor:newbj
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
                <div style={{marginTop:'22%'}}></div>
                <div className='ldestination'>
                    <div className="dest">
                        <p style={{fontWeight:'bold',fontSize:'20px'}}>风俗文化介绍</p>
                        <div style={{textAlign:'center'}}>
                            <div className="hot">
                                <div className='inner'>
                                    <p>桃符</p>
                                </div>
                                
                            </div>
                            <div className="hot2">
                                <div className='inner'>
                                    <p>汉服</p>
                                </div>
                            </div>
                            <div className="hot3" >
                                <div className='inner'>
                                    <p>“福”字</p>
                                </div>
                            </div>
                        </div>
                        <div style={{height:'140px'}}></div>
                        <Casecade  getvalue={this.getvalue} style={{width:'50pxx',position:'relative'}}/>
                    
                        
                        <div>   
                            <p style={{fontSize:'18px',fontWeight:'bold',marginTop:'20px'}}>{this.state.value}</p>
                            {
                                this.state.list.map((item)=>(
                                    <Link to={{pathname:'/city/'+item.name,state:{tourist:item.name}}}>
                                        <div className="city" key={item.cityname}>
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