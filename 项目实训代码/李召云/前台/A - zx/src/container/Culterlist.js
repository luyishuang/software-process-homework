import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

var clist = [
    {
        cultername:'汉字',
        imgpath:'images/lbg5.jpg'
    },
    {
        cultername:'汉字',
        imgpath:'images/lbg2.jpg'
    },
    {
        cultername:'汉字',
        imgpath:'images/lbg.jpg'
    },
    {
        cultername:'汉字',
        imgpath:'images/dhanfu.png'
    },
    {
        cultername:'汉字',
        imgpath:'images/lbg5.jpg'
    },
    {
        cultername:'汉字',
        imgpath:'images/lbg2.jpg'
    },
    {
        cultername:'汉字',
        imgpath:'images/lbg.jpg'
    },
]


export default class Culterlist extends Component {

        constructor(){
            super();
            this.state={
                value:'',
                isSearch:false
            }
        }
        onChange= (value) => {
        this. setState({ value }) ;
        };
        clear= () => {
        this.setState({ value:''});
        };

    goback=()=>{
        this.props.history.push('/tab');

    }

    tosearch=()=>{
        this.props.history.push('/search');
    }
    

    render() {
        return (
            <div className='lculterbg'>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}><img style={{width:'20px',lineHeight:'20px'}} src={require('../images/icon/fanhui.png')}/></span>
                    <span style={{marginTop:'5%'}}>风俗文化</span>
                </div>
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

                <div className='lculterlist'>
                    {
                        clist.map((item)=>(
                            <div className='lculterItem' style={{backgroundImage:"url('./"+item.imgpath+"')"}}>
                                <Link to={'/culter/'+item.cultername}>
                                    {/* <div className='inner'> */}
                                    <span className='lcultertitle'>
                                        <p>{item.cultername}</p>
                                    </span>
                                    {/* </div> */}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
