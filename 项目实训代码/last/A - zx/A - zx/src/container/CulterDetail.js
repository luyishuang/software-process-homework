import React, { Component } from 'react'

export default class CulterDetail extends Component {

    constructor(){
        super();
        this.state={
            content:'<p>桃符&nbsp;桃符&nbsp;桃符&nbsp;桃符&nbsp;桃符&nbsp;桃符</p>'
        }
    }
    componentDidMount(){
        var title = this.props.match.params.name;
        console.log(this.props.match);
        fetch('/culture/?title='+title)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                content:res
            })
        })
    }
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
                <div style={{marginTop:'15%'}} dangerouslySetInnerHTML={{__html:this.state.content['content']}}>
                    
                </div>
            </div>
        )
    }
}
