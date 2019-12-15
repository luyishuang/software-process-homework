import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import QierPlayer from 'qier-player';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';


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
            result:[],
            value:'',
            isSearch:false
        }
    }

    componentDidMount(){

    }

    submitvalue=(value)=>{
        console.log(value);
        console.log(this.state.isSearch);
        this.setState({
            isSearch:true
        })
        this.props.history.push('/result/'+value);
    }

    onChange= (value) => {
        this. setState({ value }) ;
    };
    clear= () => {
        this.setState({ value:''});
    };

    goback=()=>{
        this.props.history.push('/culter');
    }

    render() {
        // var {key} = this.props.match.params;
        return (
            <div>
                {/* <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}><img style={{width:'20px',lineHeight:'20px'}} src={require('../images/icon/fanhui.png')}/></span>
                    <span style={{marginTop:'5%'}}>搜索结果</span>
                </div> */}
                <div>
                    <SearchBar
                    value={this.state.value}
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'submit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() =>console . log( 'onFocus')}
                    onBlur={() =>console . log( 'onBlur')}
                    onCancel={this.goback}
                    showCancelButton
                    onChange={this.onChange}
                    />
                </div>
                
                <div style={{marginTop:'10%',padding:'0% 2% 0% 2%'}}>
                    <div>
                        <p>景区</p>
                        <Link to='/city/北京市/故宫'>故宫</Link>
                        <Link to='/place/太和殿'>太和殿</Link>
                    </div>
                    <div>
                        <p>风俗文化</p>
                        <Link to='/culter/汉字'>汉字</Link>
                        <Link to='/culter/汉服'>汉服</Link>
                    </div>
                    <div>
                        <p>文章推送</p>
                        <Link to='/culter/汉字'>汉字</Link>
                        <Link to='/culter/汉服'>汉服</Link>
                    </div>
                </div>
                {/* <QierPlayer srcOrigin="../images/music/bj1.mp3"/> */}
            </div>
        )
    }
}
