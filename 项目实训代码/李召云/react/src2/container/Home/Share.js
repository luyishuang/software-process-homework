import React,{Component} from 'react';
import Sider from './Sider';
import {NavLink} from "react-router-dom";

export default class Share extends Component{
    constructor(){
        super();
        this.state={
            share:[]
        }
    }

    componentDidMount(){
        // this.url = this.props.match.url;
        // this.url = this.props.location.state.url || '/home/share';
        console.log(this.props);
        if(this.props.match.params.id !== undefined){
            fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+this.props.match.params.id)
            .then((res)=>res.json())
            .then((res)=>{
                
                this.setState({
                    share:res.data
                },()=>{
                    console.log(this.state.share);
                })
            })
        }
       
    }

    componentDidUpdate(prevProps,prevState){
        let newid = this.props.match.params.id;
        let old = prevProps.match.params.id;
        if(old !== newid){
            fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+newid)
            .then((res)=>res.json())
            .then((res)=>{
                console.log("share:"+res);
                this.setState({
                    share:res.data
                },()=>{
                    this.flag=false;
                })
            })
            .catch(err=>{
                console.log(err);
            })
            
        }else{
            console.log("share failed");
        }
    }

    render(){
        this.url = this.props.location.state!==undefined?this.props.location.state.url || '/home/share':'/home/share';
        return(
            <div className='list'>
                {
                    this.state.share.map((item)=>(
                        <li key={item.id} style={{listStyle:"none"}}>
                            <img src={item.author.avatar_url} style={{width:"25px",height:'25px',float:'left',marginTop:'10px',marginLeft:'5px'}}/>
                            <span style={{float:'left',width:'80px',textAlign:'center'}}>{item.reply_count}/{item.visit_count}</span>                            
                            <span style={{float:'left',width:'40px',height:'30px',color:'white',fontSize:'13px',backgroundColor:'green',marginTop:'10px',textAlign:'center',paddingBottom:'5px',lineHeight:'30px'}}>置顶</span>
                            <NavLink to={{pathname:this.url+'/topic/'+item.id,state:{content:item.content}}}><span>{item.title}</span></NavLink>
                            <span style={{float:'right',marginLeft:'5px',marginRight:'5px'}}>1天前</span>                            
                            <img src={item.author.avatar_url} style={{width:'25px',height:'25px',float:'right',marginTop:'10px'}}/>
                        </li>
                    ))
                }
                <Sider url={this.url}/>
            </div>
        )
    }
}