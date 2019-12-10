import React, { Component } from 'react';
import Sider from "./Sider";
import {NavLink} from "react-router-dom";


export default class All extends Component {
    constructor(){
        super();
        this.state={
            all:[]
        }
    }

    componentDidMount(){
        console.log("newAll");
        console.log(this.props);
        console.log(this.url);
        if(this.props.match.params.id !== undefined){
            fetch("https://cnodejs.org/api/v1/topics?page="+this.props.match.params.id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState((state)=>{
                    return{
                        all:res.data
                    }
                },()=>{
                    console.log(this.state.all);
                })
            
            })
        }
        
    }

    componentDidUpdate(prevProps,prevState){
        let id = this.props.match.params.id;
        console.log(id);
        if(prevProps.match.params.id!==this.props.match.params.id){
            fetch("https://cnodejs.org/api/v1/topics?page="+id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState((state)=>{
                    // data:res.data
                    return{
                        all:res.data
                    }
                })
            
            })
        }
        else{
            console.log("dhsjk");
        }
       
    }


    render() {
        this.url = this.props.location.state!==undefined?this.props.location.state.url || '/home/all':'/home/all';
        return (
            <div className='list'>
                {
                    this.state.all.map((item)=>(
                        <li key={item.id}>
                            {/* <NavLink to={this.url+'/topic/'+item.id}><span>{item.title}</span></NavLink> */}
                            <img src={item.author.avatar_url} style={{marginLeft:'5px'}}/>
                            <span style={{float:'left',width:'70px',textAlign:'center'}}>{item.reply_count}/{item.visit_count}</span>                            
                            <span className='totop'>置顶</span>
                            <NavLink to={{pathname:this.url+'/topic/'+item.id,state:{content:item.content}}}><span style={{marginLeft:'5px'}}>{item.title}</span></NavLink>
                            <span style={{float:'right',marginLeft:'5px',marginRight:'5px'}}>5天前</span>                            
                            <img src={item.author.avatar_url} style={{float:'right'}}/>
                            {/* <div dangerouslySetInnerHTML={{__html:item.content}}></div> */}
                        </li>
                    ))
                }
                <Sider url={this.url}/>
            </div>
        )
    }
}
