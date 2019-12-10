import React, { Component } from 'react'
import Protal from "./Portal"

export default class ParentProtal extends Component {

    handleClick=()=>{
        console.log("ParentClick");
    }
    /**
     *      按照组件嵌套的顺序进行事件冒泡
     */

    render() {
        return (
            <div onClick={this.handleClick}>
                <Protal />
            </div>
        )
    }
}
