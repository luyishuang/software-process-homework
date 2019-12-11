import React, { Component } from 'react'
export default class CNode extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
        
    }

    componentDidMount(){
        // let id = this.props.match.params.id;
        // fetch("https://cnodejs.org/api/v1/topics?page="+id)
        // .then((res)=>res.json())
        // .then((res)=>{
        //     console.log(res);

        //     this.setState({
        //         data:res.data
        //     })
        // })
    }

    componentDidUpdate(prevProps,prevState){
        // 每次更新/状态变化后都会调用
        if(prevProps.match.params.id!==this.props.match.params.id){
            let id = this.props.match.params.id;
            fetch("https://cnodejs.org/api/v1/topics?page="+id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);

                this.setState({
                    data:res.data
                })
            })
        }else{

        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.map((item)=>(
                        <div key={item.id} style={{width:500,border:"2px solid green"}}>
                            <h2>{item.title}</h2>
                            <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                            {/* 解析html格式    dangerouslySetInnerHTML={{__html:item.属性}}*/}
                        </div>
                    ))
                }
               
            </div>
        )
    }
}
