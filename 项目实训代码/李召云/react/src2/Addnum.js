import React, { Component } from 'react'

export default class Addnum extends Component {
    constructor(){
        super();
        this.state={
            num:0
        }
    }

    addnum=()=>{
        this.setState((state)=>{
            var now=state.num+1;
            return{
                num:now
            }
        })
    }


    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.addnum}>+</button>
            </div>
        )
    }
}
