
import React, { Component } from 'react';
import Sider from "./Sider";
import {NavLink} from 'react-router-dom';
export default class Jinghua extends Component {
    constructor(){
        super();
        this.state={
            good:[]
        }
    }

    componentDidMount(){
        // this.url = this.props.match.path;
        // this.url = this.props.location.state.url || '/home/jinghua';
        if(this.props.match.params.id !== undefined){
            fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+this.props.match.params.id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState((state)=>{
                    return{
                        good:res.data
                    }
                },()=>{
                    console.log(this.state.good);
                })
            
            })
        }
        
    }
    componentDidUpdate(prevProps,prevState){
        let id = this.props.match.params.id;
        console.log(this.props);
        if(prevProps.match.params.id!==this.props.match.params.id){
            fetch("https://cnodejs.org/api/v1/topics?tab=good&page="+id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState((state)=>{
                    // data:res.data
                    return{
                        good:res.data
                    }
                },()=>{
                    console.log(this.state.good);
                })
            
            })
        }
        else{
            console.log("dhsjk");
        }
    }

    render() { 
        this.url = this.props.location.state!==undefined?this.props.location.state.url || '/home/good':'/home/good';
        return (
            <div className='list'>
                {
                    this.state.good.map((item)=>{
                        return <li key={item.id} style={{listStyle:"none"}}>
                            <img src={item.author.avatar_url} style={{marginLeft:'5px'}}/>
                            <span style={{float:'left',width:'70px',textAlign:'center'}}>{item.reply_count}/{item.visit_count}</span>                            
                            <span className='totop'>置顶</span>
                            <NavLink to={{pathname:this.url+'/topic/'+item.id,state:{content:item.content}}}>{item.title}</NavLink>
                            <span style={{float:'right',marginLeft:'5px',marginRight:'5px'}}>2天前</span>                            
                            <img src={item.author.avatar_url} style={{float:'right'}}/>
                            </li>
                    })
                }
                <Sider url={this.url}/>
            </div>
            
        )
    }
}
