import React ,{Component } from 'react'
export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            data:''
        }
    }
    componentDidMount(){
        var title = this.props.match.params.title;
        console.log(this.props.match);
        fetch('/article/?title='+title)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                data:res
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
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'4%'}} onClick={()=>this.goback()}>
                        <img src={require('../images/dfanhui2.png')}/>
                    </span>
                    <span style={{marginTop:'5%'}}>{this.state.data['title']}</span>

                     {/* <span style={{marginTop:'5%'}}>故宫最小的宫殿</span> */}
                </div>
                <div className='thimg'>
                    <div dangerouslySetInnerHTML={{__html:this.state.data['content']}}></div>
                </div>
            </div>
        )
    }
}