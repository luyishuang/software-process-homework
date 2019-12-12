import React, { Component } from 'react'

export default class CulterDetail extends Component {

    goback=()=>{
        window.history.back(-1)
    }

    render() {
        this.cultername = this.props.match.params.name;
        return (
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}><img style={{width:'20px',lineHeight:'20px'}} src={require('../images/icon/fanhui.png')}/></span>
                    <span style={{marginTop:'5%'}}>{this.cultername}</span>
                </div>
                <div>
                    lalala
                </div>
            </div>
        )
    }
}
