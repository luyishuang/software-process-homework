import React, { Component } from 'react';
import {Link,Route,Switch,Redirect} from "react-router-dom";
import All from './All';
import Share from './Share';
import Jinghua from './Jinghua';
import More from './More';
import '../home.css';
import Ask from './Ask';
import Job from './Job';
import Dev from './Dev';
import Alltry from './Alltry';

export default class Home extends Component {
    constructor(){
        super();
        this.btns=[
            {title:'全部',tab:'all'},
            {title:'精华',tab:'good'},
            {title:'分享',tab:'share'},
            {title:'招聘',tab:'job'},
            {title:'问答',tab:'ask'},
        ];
        this.state={
            data:[1,2,3]
        }
        this.tab='';
    }

    componentDidMount(){
        fetch("https://cnodejs.org/api/v1/topics")
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data,
            })
        })
    }

    getData=(tab,page)=>{
        this.tab = tab;
        fetch("https://cnodejs.org/api/v1/topics?tab="+tab+"&page="+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }


    render() {
        return (
            <div>
                <div className='navhome'>
                   {
                       this.btns.map((item,idx)=>(
                           <button onClick={()=>{this.getData(item.tab,1)}} key={idx}>{item.title}</button>
                       ))
                   }
                </div>
                <div className='showcontent'>
                    {
                        this.state.data.map((item)=>(
                            <li key={item.id}>
                                {/* <img src={item.author.avatar_url} style={{marginLeft:'5px'}}/>
                                <span style={{float:'left',width:'70px',textAlign:'center'}}>{item.reply_count}/{item.visit_count}</span>                            
                                <span className='totop'>置顶</span> */}
                                <Link to={'/topic/'+item.id}><span style={{marginLeft:'5px'}}>{item.title}</span></Link>
                                {/* <span style={{float:'right',marginLeft:'5px',marginRight:'5px'}}>5天前</span>                            
                                <img src={item.author.avatar_url} style={{float:'right'}}/> */}
                            </li>
                        ))
                    }
                </div>
                <div>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <button key={item} onClick={()=>{this.getData(this.tab,item)}}>{item}</button>
                        ))
                    }
                </div>
            </div>
        )
    }
}
