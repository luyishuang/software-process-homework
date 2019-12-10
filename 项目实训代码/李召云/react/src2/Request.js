import React, { Component } from 'react'
import Axios from "axios";          //没有用到，这句也会执行
// import {fetch} from "whatwg-fetch";

export default class Request extends Component{
    constructor(){
        super();
        this.state=
        {
            data:[]
        }
    }
    componentDidMount(){//页面加载完成后执行
        let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';

        //默认是get请求，可配置第二个参数，配置请求的
        fetch(url,{method:'post'}).then((res)=>res.json())
        .then((res)=>{
            console.log(res);   //直接res.result获取数据
            this.setState({
                data: res.result
            })
        })
        // Axios.get("https://api.apiopen.top/musicRankingsDetails?type=1")
        // .then((res)=>{
        //     console.log(res);
        //     this.setState({
        //         data:res.data.result
        //     })
        // });
    }
    render(){
        
        return(
            <div>
                <h1>数据请求</h1>
                <ul>
                    {
                        this.state.data.map((item,idx)=>{
                            return <li key={idx}>
                                        <p>歌名：{item.title}</p>
                                        <p>作者：{item.author}</p>
                                    </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}