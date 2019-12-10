import React, { Component } from 'react'
import {Consumer} from "./Context";
import pathToReg from "path-to-regexp";

export default class Route extends Component {
    render() {
        return (
            <Consumer>
                {
                    (value)=>{
                        // let {path,component:Component,exact} = this.props;    //component:Component重命名为Component
                        let {path,component,exact} = this.props;    //component:Component重命名为Component
                        let {pathname} = value.location;
                        let reg = pathToReg(path,[],{end:exact||false});
                        if(reg.test(pathname)){
                            // console.log("p:"+pathname);
                            // return <Component {...value}/>
                            return React.createElement(component,{...value})
                        }
                        return null;
                    }
                }
            </Consumer>
        )
    }
}
