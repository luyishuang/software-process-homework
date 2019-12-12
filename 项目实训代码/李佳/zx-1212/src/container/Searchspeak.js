import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import QierPlayer from 'qier-player';

var list=[
    {
        name:"风俗文化",
        path:'/culter',
        list:[
            '汉服','汉字','桃符'
        ]
    },
    {
        name:"景点",
        path:'/place/',
        list:[
            '太和殿','养心殿'
        ]
    },
    {
        name:"景区",
        path:'/city/',
        list:[
            {
                city:'北京',
                list:[
                    '故宫','颐和园','天坛'
                ]
            },
            {
                city:'西安',
                list:[
                    '故宫','颐和园','天坛'
                ]
            }
        ]
    }
]

export default class Searchspeak extends Component {

    constructor(){
        super();
        this.state={
            result:[]
        }
    }

    componentDidMount(){

    }

    goback=()=>{
        this.props.history.push('/culter');
    }

    render() {
        var {key} = this.props.match.params;
        return (
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}><img style={{width:'20px',lineHeight:'20px'}} src={require('../images/icon/fanhui.png')}/></span>
                    <span style={{marginTop:'5%'}}>搜索结果</span>
                </div>
                <div style={{marginTop:'20%'}}>
                    <div>
                        <p>风俗文化</p>
                        <Link to='/culter/汉字'>汉字</Link>
                        <Link to='/culter/汉服'>汉服</Link>
                    </div>
                </div>
                {/* <QierPlayer srcOrigin="../images/music/bj1.mp3"/> */}
            </div>
        )
    }
}
