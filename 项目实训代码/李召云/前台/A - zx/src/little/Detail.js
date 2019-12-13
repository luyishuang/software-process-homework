import React, { Component } from 'react'

export default class Detail extends Component {
    constructor(){
        super();
        this.state={
            
        }
    }
    render() {
        return (
            <div>
                <div className='acchead'>
                    <a style={{float:'left',marginLeft:'3%',marginBottom:'1%',fontSize:'28px'}} href='/#/tab'>
                        <img src={require('../images/dfanhui2.png')}/>
                    </a>
                    <span style={{ marginTop: '3%' ,float:'left',marginLeft:'30%'}}>详情</span>
                </div>
            </div>
        )
    }
}
