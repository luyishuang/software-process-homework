import React ,{Component } from 'react'
import {Link }from 'react-router-dom'
export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            cityinfor:[],
            data:{
                title:'',
                content:''
            }
        }
    }
    // componentDidMount(){
    //     fetch('/article/?artid=2')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         this.setState({
    //             title:res.title,
    //             data:res.content
    //         })
    //     })
    // }
    goback=()=>{
        window.history.back(-1)
    }
    render(){
        this.name = this.props.match.params.num;
        return(
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>
                        <img src={require('../images/dfanhui2.png')}/>
                    </span>
                     <span style={{marginTop:'1%',float:'left',marginLeft:'20%'}}> 
                     {this.name}
                        {/* <div dangerouslySetInnerHTML={{__html:this.state.title}}></div> */}
                     </span>
                </div>
                <div>
                    {/* <div className='thimg'><div dangerouslySetInnerHTML={{__html:this.state.data}}></div> */}

                </div>
                
            </div>
        )
    }
}