import React, { Component } from 'react'
import {Consumer} from "./Context";

export default class Redirect extends Component {
    render() {
        return (
            <Consumer>
                {
                    (value)=>{
                        value.history.push(this.props.to);
                    }
                }
            </Consumer>
        )
    }
}
