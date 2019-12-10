import React, { Component } from 'react';
// import {Consumer} from "./Context";
import {con2,con} from "./Context";

export default class Child extends Component {
    render() {
        console.log(this.context);  //系统默认内置属性
        return (
            <div>
                <div>{this.context}</div>
                Child组件
                {
                    <con.Consumer>
                        {
                            // (id)=><div>{id}</div>
                            (value)=><div>{value.a}</div>
 
                        }
                    </con.Consumer>
                    
                }
                {
                    <con.Consumer>
                        {
                            // (id)=><div>{id}</div>
                            (value)=><div>{value.id}</div>  
                        }
                    </con.Consumer>
                    
                }
                <con2.Consumer>
                    {
                        (value)=><div>{value}</div>
                    }
                </con2.Consumer>
                
            </div>
        )
    }
}

Child.contextType=con2;
