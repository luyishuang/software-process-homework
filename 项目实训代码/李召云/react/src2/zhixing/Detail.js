import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            data:'fds',
            username:"mr",
            time:"2019",
            content:"mr"
        }
    }

    handleSubmit=()=>{
        fetch("/savedt",{
            method:"POST",
            mode : 'cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body:`username=${this.state.username}&content=${this.state.content}&createtime=${this.state.time}`
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        })
    }

    // componentDidMount(){
    //     fetch('http://localhost:3005/form')
    //     .then((res)=>res.json())
    //     .then((res)=>{
    //         console.log(res);
    //         // this.setState({
    //         //     data:res.data
    //         // })
    //     })
    // }
    change=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    change1=(e)=>{
        this.setState({
            content:e.target.value
        })
    }
    change2=(e)=>{
        this.setState({
            time:e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="用户名" name='username' value={this.state.username} onChange={this.change}/>
                <input type="text" placeholder="内容" name='content' value={this.state.content} onChange={this.change1}/>
                <input type="text" placeholder="创建时间" name='createtime' value={this.state.time} onChange={this.change2}/>
                <input type="submit" value='submit'></input>
            </form>
        )
    }
}
