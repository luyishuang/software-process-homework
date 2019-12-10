import React, { Component } from 'react';
import {Provider} from "./Context";

export default class HashRouter extends Component {
    constructor(){
        super();
        this.state={
            location:{
                pathname:window.location.hash.slice(1)||'/'
            }
        }
    }

    componentDidMount(){
        window.location.hash=window.location.hash || '/';   //第一次页面加载时赋值

        //仅绑定事件
        window.addEventListener("hashchange",()=>{
            this.setState({
                location:{
                    pathname:window.location.hash.slice(1)
                }
            })
            // console.log(window.location.hash);
        })
        // window.onhashchange=()=>{ //hash变化时触发    
        //     this.setState({
        //         location:window.location.hash.slice(1)
        //     })
        //     console.log(window.location.hash);  //获取地址栏的hash
        // }
    }


    render() {
        // console.log(this.props.children);
        let val={
            location:this.state.location,
            history:{
                push:(path)=>{
                    window.location.hash=path;
                }
            }

        }
        return (
            <Provider value={val}>
                {this.props.children}
            </Provider>
        )
    }
}
