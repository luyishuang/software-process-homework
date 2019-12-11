import React, { Component } from 'react'
import { Button } from 'antd-mobile'
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';

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
    render() {
        const { files } = this.state;
        return (
            <div>
                <div className='acchead'>
                    <span style={{ float: 'left', marginLeft: '3%', marginBottom: '4%' }} onClick={() => this.goback()}>&lt;</span>
                    <span style={{ marginTop: '5%' }}>我的资料</span>
                </div>
                <div className='acctou' style={{ position: 'fixed', right: '-20%',top:'17%'}}>
                        <img src={`./yan/ytx.png`} style={{ height:'30%', width:'30%', borderRadius:'100%' }} />
                    </div>

                <WingBlank>
                    <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 1}
                        multiple={this.state.multiple}
                        style={{ paddingLeft: '20%',marginTop:'15%'}}
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
                    <input placeholder='aaa'></input>
                    <p>年&ensp;&ensp;龄:</p>
                    <input placeholder='男' />
                    <p>出生日期:</p>
                    <input placeholder='123456' />
                </div>
                <Button style={{ textAlign: 'center', width: '80%', marginLeft: '10%' }}>保存</Button>
            </div>
        )
    }
}