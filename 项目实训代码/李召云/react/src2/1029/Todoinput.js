import React, { Component } from 'react';
import store from "../store";
import {change,addItem} from "../actions/index";

export default class Todoinput extends Component {

    constructor(){
        super();
        this.state={
            value:store.getState().change
        }
    }

    addItem=(e)=>{
        if(e.keyCode === 13){
            // let action={
            //     type:"add_to_item",
            //     value:e.target.value
            // }
            // store.dispatch(action);
            store.dispatch(addItem(e.target.value));
        }
    }


    handleChange=(e)=>{  //改为受控组件
        // store.dispatch({
        //     type:"change_input_value",
        //     value:e.target.value
        // })
        store.dispatch(change(e.target.value));
    }

   
    componentDidMount(){
        this.change=store.subscribe(()=>{
            this.setState({
                value:store.getState().change
            })
        })
    }
    componentWillUnmount(){
        this.change();
    }


    render() {
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange} type="text" onKeyDown={this.addItem}/>
                
            </div>
        )
    }
}
