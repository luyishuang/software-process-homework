import React, { Component } from 'react'

export default class More extends Component {

    constructor(){
        super();
        this.state={
            content:'',
        }
    }

    componentDidMount(){
        let content=this.props.location.state.content;
        console.log(this.props);
        this.setState({
            content:content
        })
    }

    render() {
        let {id}= this.props.match.params;
        console.log(id);
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
            </div>
        )
    }
}
