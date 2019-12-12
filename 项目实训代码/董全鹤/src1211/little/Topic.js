import React,{Component} from 'react'
import { ImagePicker, WingBlank} from 'antd-mobile';
const data = [];
export default class Topic extends Component{
    constructor(){
        super();
        this.state={
            dataa:[],
            content:'',
            files: data,
            multiple: true,
        }
    }
      onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
          files,
        });
      }
    componentDidMount() {
        // this.autoFocusInst.focus();
      }
    goback=()=>{
        // console.log(this.state.content);
        window.history.back(-1)
    }
    change=(e)=>{
        this.setState({
            content:e.target.value    
        })
    }
    handleClick(){
        this.setState({
            dataa:[...this.state.dataa,this.state.content],
            content:''
        })
    }
    handleItemClick(index){
        const dataa=[...this.state.dataa];
        data.splice(index,1);
        this.setState({
            dataa:dataa
        })
    }
    render(){
        const { files } = this.state;
        return(
            <div className='toout'>
                <div className='topictitle'>
                    <a style={{float:'left',marginLeft:'6%'}} href='/#/tab'>
                        <img src={require('../images/dfanhui2.png')} style={{width:'70%'}}/>
                    </a>
                    <span style={{fontSize:'22px'}}>发表动态</span>
                    <a className='a2' onClick={this.handleClick.bind(this)} >发表</a>
                </div>
                <div className='tobody'>
                    <div style={{float:'left',height:'80%',width:'30%'}}>
                        <img src={require("../images/ljtouxiang3.jpg")}/>
                    </div>
                    <div style={{float:'left',height:'80%',width:'50%',padding:'10% 0'}}>
                        <span>小知</span>
                    </div>
                </div>
                <div className='tobodyy'>
                    <textarea cols="40" rows="18" placeholder='分享新鲜事...' value={this.state.content} style={{fontSize:'20px'}} onChange={(e)=>this.change(e)}/>
                    <WingBlank >
                        <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 9}  
                        multiple={this.state.multiple}
                        />
                    </WingBlank>
                </div>
            </div>
        )
    }
}

