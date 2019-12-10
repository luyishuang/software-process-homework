import React, { Component } from 'react';
import Todoinput from "./Todoinput";
import Todoing from "./Todoing";


export default class Home extends Component {
    render() {
        return (
            <div>
                One
                <div>
                <Todoinput/>
                <Todoing/>
                </div>
                
            </div>
        )
    }
}
