import React, { Component } from 'react';
import Child from "./Child";

export default class Parent extends Component {
    constructor(){
        super();
        this.state={
            time:new Date().toLocaleString()
        }
    }
    componentDidMount(){

        this.timeId=setInterval(() => {
            console.log(123);
            this.setState({
                time:new Date().toLocaleString()
            })
        }, 1000);
    }
    componentWillUnmount(){ //关闭组件的时候执行
        clearInterval(this.timeId);
    }
    render() {
        return (
            <div>
                <h1>{this.state.time}</h1>
                Parent组件
                <Child />
            </div>
        )
    }
}

