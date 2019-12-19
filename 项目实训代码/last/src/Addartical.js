import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Addartical extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return(
            <div className='addyhit'>
                <h3>
                    题目：<input type='text' />
                </h3>
                <h3>
                    内容：<input type='text'/>
                </h3>
                <Link to='./artical'>
                    <button>点击添加</button>
                </Link>
            </div>
        )
    }
}