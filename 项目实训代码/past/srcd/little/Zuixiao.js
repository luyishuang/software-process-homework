import React ,{Component } from 'react'
export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    componentDidMount(){
        fetch('/article/?artid=1')
        .then(res=>res.json())
        .then(res=>{
            this.setState({
                data:res.content
            })
        })
    }
    goback=()=>{
        window.history.back(-1)
    }
    render(){
        return(
            <div>
                <div className='gghead'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>&lt;</span>
                     <span style={{marginTop:'5%'}}>故宫的大怪兽</span>
                </div>
                <div className='thimg'>
                    <div dangerouslySetInnerHTML={{__html:this.state.data}}></div>
                </div>
            </div>
        )
    }
}