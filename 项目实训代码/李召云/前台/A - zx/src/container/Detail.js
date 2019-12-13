import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    goback=()=>{
        window.history.back(-1)
    }
    render() {
        return (
            <div>
                <div className='dtitle'> 
                    <span className='dtitles1' >&lt; </span>
                    <span className='dtitles2' onClick={()=>this.goback()}>详情</span>
                </div>
            </div>
        )
    }
}
