import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { ImagePicker, WingBlank } from 'antd-mobile';
import store from '../store';

const data = [
    //     {
    //     url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    //     id: '2121',
    // }, {
    //     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    //     id: '2122',
    // }
];

export default class Account extends Component {
    state = {
        files: data,
        multiple: false,
        username:store.getState().getuser.loginname,
        data:'',
        sex:'',
        age:''
    }

    componentDidMount(){
            this.change=store.subscribe(()=>{
                this.setState({
                    value:store.getState().getuser.loginname
                })
            })
        fetch('/login/person/?username='+this.state.username)
        .then(res => res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                data:res.message,
                sex:res.message['sex'],
                age:res.message['birth']
            })
        })
    }
    usernameChange=(e)=>{
        this.setState({ 
            username : e.target.value 
        })
    }
    sexChange=(e)=>{
        this.setState({ 
            sex:e.target.value
        },()=>{
            console.log(this.state.data['sex']);
        })
    }
    ageChange=(e)=>{
        this.setState({ 
            age:e.target.value
        },()=>{
            console.log(this.state.data['birth']);
        })
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    onSegChange = (e) => {
        const index = e.nativeEvent.selectedSegmentIndex;
        this.setState({
            multiple: index === 1,
        });
    }
    goback = () => {
        window.history.back(-1)
    }
updateinfo=()=>{
    fetch('/newintroduce/add',{
        method: "POST",
        mode : 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `username=${this.state.username}&imgpath=${this.state.data['imgpath']}&sex=${this.state.sex}&birth=${this.state.age}`
      })
        .then(res => res.json())
        .then(res=>{
            console.log(res);
            
        })
}

    render() {
        const { files } = this.state;
       
        return (
            <div>
                <div className='acchead'>
                    <a style={{float:'left',marginLeft:'3%',marginBottom:'1%',fontSize:'28px'}} href='#/tab'>
                        <img src={require('../images/dfanhui2.png')}/>
                    </a>
                    <span style={{ marginTop: '3%' ,float:'left',marginLeft:'30%'}}>我的资料</span>
                </div>
                <div className='acctou' style={{ position: 'fixed', right: '-20%',top:'15%'}}>
                    <img src={`./yan/ytx.png`} style={{ height:'30%', width:'30%', borderRadius:'100%' }} />
                </div>

                <WingBlank>
                    <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 1}
                        multiple={this.state.multiple}
                        style={{ paddingLeft: '20%',marginTop:'15%',height:'60px',width:'40%'}}
                    />
                    {/* <SegmentedControl
                        values={['更改头像']}
                        selectedIndex={this.state.multiple ? 1 : 0}
                        onChange={this.onSegChange}
                        style={{ width: '80%', marginLeft: '10%' }}
                    /> */}
                </WingBlank>

                <div className='accbody'>
                    <p>用户名:</p>
                    <input placeholder='小知' value={this.state.username} onChange={(e)=>this.usernameChange(e)}></input>
                    <p>性&ensp;&ensp;别:</p>
                    <input placeholder='男' value={this.state.sex} onChange={(e)=>this.sexChange(e)}/>
                    <p>出生日期:</p>
                    <input placeholder='20'  value={this.state.age} onChange={(e)=>this.ageChange(e)}/>
                </div>
                <Button style={{ textAlign: 'center', width: '80%', marginLeft: '10%' }} onClick={this.updateinfo}>保存</Button>
            </div>
        )
    }
}