import React,{Component} from 'react'
import { ImagePicker, WingBlank} from 'antd-mobile';
import store from '../store';

const data = [];
export default class Topic extends Component{
    constructor(){
        super();
        this.state={
            dataa:[],
            content:'',
            files: data,
            multiple: true,
            username:store.getState().getuser,
        
        }
    }
    // onChange = (files, type, index) => {
    //     console.log(files, type, index);
    //     this.setState({
    //       files,
    //     });
    //   }
    onChange = (e) => {
        console.log('调用')
        e.preventDefault();
        const filelist = e.target.files;
        const formData = new FormData();
        var date = new Date();
        for (const key in filelist) {
            formData.append(this.state.username.loginname+date.getTime()+Math.random().toFixed(5),filelist[key]);
            console.log(filelist[key],date.getTime());
            // this.urllist.push()
        }
        console.log(formData);
        console.log(filelist);


        // 这里的 fetch 引用了 isomorphic-fetch 包
        fetch('/dt/pic', {
            method: 'POST',
          body: formData
        }).then(res=>res.json()).then(res=>{
            console.log(res)
        })
      };  
    componentDidMount() {
        // this.autoFocusInst.focus();
      }
    
    change=(e)=>{
        this.setState({
            content:e.target.value    
        })
    }
    // handleClick(){
    //     this.setState({
    //         dataa:[...this.state.dataa,this.state.content],
    //         content:''
    //     })
    // }
    // handleItemClick(index){
    //     const dataa=[...this.state.dataa];
    //     data.splice(index,1);
    //     this.setState({
    //         dataa:dataa
    //     })
    // }
    push=(idx)=>{
        var filelist = [];
        console.log(this.state.files)
        // for(var i=0;i<this.state.files.length;i++){
        //     console.log(this.state.files[i]['url']);
        //     // var buf = Buffer.from(this.state.files[i]['url'],'base64');
        //     // filelist.push(buf)
        //     filelist.push(this.state.files[i]['url'])
        // }
        console.log(filelist);
        fetch('/dt/save',{
            method:'POST',
            mode:'cors',
            headers:{
                'Content-Type':'application/x-www-form-urlencoded'
            },
            body:`username=${this.state.username.loginname}&content=${this.state.content}&picpath=${filelist}`
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                dataa:res.dataa
            })
            this.props.history.push('/tab');
        })
    }
    render(){
        const { files } = this.state;
        return(
            <div className='toout'>
                <div className='topictitle'>
                    <a style={{float:'left',marginLeft:'6%'}} href='#/tab'>
                        <img src={require('../images/dfanhui2.png')} style={{width:'70%'}}/>
                    </a>
                    <span style={{fontSize:'22px'}}>发表动态</span>
                    <a className='a2' onClick={(idx)=>this.push(idx)} >发表</a>
                </div>
                <div className='tobody'>
                    <div style={{float:'left',height:'80%',width:'30%'}}>
                        <img src={require("../images/dtouxiang2.png")}/>
                    </div>
                    <div style={{float:'left',height:'80%',width:'50%',padding:'10% 0'}}>
                        <span>admin</span>
                    </div>
                </div>
                <div className='tobodyy'>
                    <textarea cols="40" rows="18" placeholder='分享新鲜事...' value={this.state.content} style={{fontSize:'20px'}} onChange={(e)=>this.change(e)}/>
                    {/* <WingBlank >
                        <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 9}  
                        multiple={this.state.multiple}
                        />
                    </WingBlank> */}
                    <div className='upload-container'>
                        <input type="file" name="image" multiple className='upload-input' onChange={this.onChange} />
                        <button type="primary" className='upload-button'>上传图片</button>
                    </div>
                </div>
            </div>
        )
    }
}

