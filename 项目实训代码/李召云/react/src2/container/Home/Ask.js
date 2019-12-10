import React, { Component } from 'react';
import Sider from './Sider';
import {NavLink} from 'react-router-dom'; 

export default class Ask extends Component {
    constructor(){
        super();
        this.state={
            ask:[]
        }
    }

    componentDidMount(){
        // this.url = this.props.location.state.url || '/home/ask';
        if(this.props.match.params.id !== undefined){
            fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+this.props.match.params.id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState((state)=>{
                    return{
                        ask:res.data
                    }
                })
            
            })
        }
        
    }

    componentDidUpdate(prevProps){
        let id = this.props.match.params.id;
        console.log(id);
        if(prevProps.match.params.id!==this.props.match.params.id){
            fetch("https://cnodejs.org/api/v1/topics?tab=ask&page="+id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState((state)=>{
                    return{
                        ask:res.data
                    }
                })
            
            })
        }
        else{
            console.log("dhsjk");
        }
       
    }


    render() {
        this.url = this.props.location.state!==undefined?this.props.location.state.url || '/home/ask':'/home/ask';
        return (
            <div className='list'>
                {
                    this.state.ask.map((item)=>(
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
