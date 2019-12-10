import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class Sider extends Component {
   
   
    render() {
        let url=this.props.url;
        console.log(url);
        return (
            <ul>
                <li style={{listStyle:"none",height:'30px',marginTop:'15px'}}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <span key={item} style={{display:"block",width:"25px",height:"25px",float:"left",textAlign:'center'}}>
                                <NavLink to={{pathname:url+'/'+item,state:{url:url}}}>{item}</NavLink>
                            </span>
                        ))
                    }
                </li>
            </ul>
        )
    }
}
