import React, { Component } from 'react'
import "./list.css"
export default class ListInput extends Component {

    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this); //bind将当前类的this，指向父类的this
    }
    handleInput=(e)=>{  
        //绑定this，事件处理函数写成箭头函数
        if(e.keyCode === 13){
            // console.log(e.target.value);  
            this.props.add(e.target.value);
        }
    }
    handleChange=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }
    render() {
        return (
            // <ul className={this.state.b+this.state.c>10?"box":""}>
               <div> 
                <span>ToDOList</span><input className="getin" type='text' onKeyDown={(e)=>{this.handleInput(e)}}></input>
                </div>
        )
    }
}
