import React, { Component } from 'react'
import ReactDOM from "react-dom"

/**
 *  弹框
 *  不在当前组件，在其他组件添加内容
 */
export default class Portal extends Component {

    handleClick=()=>{
        console.log("protalClick");
    }

    render() {
        return (
            ReactDOM.createPortal(
                <div>
                    <h1 onClick={this.handleClick}>Portal</h1>
                </div>,
                document.body
            )
            
        )
    }
}
