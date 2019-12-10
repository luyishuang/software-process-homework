import React, { Component } from 'react'

export default class Morec extends Component {
    constructor(){
        super();
        this.state={
            data:'12345'
        }
    }

    componentDidMount(){
        fetch("/hello")
        // fetch('/jdcontent/?jdtitle=太和殿')
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                data:res
            })
        })
    }

    render() {
        return (
            <div >
                <img style={{width:'100%'}} src={require(`./2.png`)}/>
                <div dangerouslySetInnerHTML={{__html:this.state.data.jdcontent}}></div>
            </div>
           
        )
    }
}
