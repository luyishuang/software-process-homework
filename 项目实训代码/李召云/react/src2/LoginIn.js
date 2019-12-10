
import React, { Component } from 'react'
import { List, InputItem, WhiteSpace,WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
class LoginIn extends Component {

    showIndex=()=>{
        this.props.history.push('/home');
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <p style={{textAlign:'center'}}>
                    <i style={{fontSize:'22px',lineHeight:'22px',float:"left"}} className="iconfont icon-fanhui"></i>
                    <span style={{fontSize:'20px'}}>登录</span>
                </p>
                <List style={{height:'100%',width:'100%'}}>
                    <InputItem
                            {...getFieldProps('inputtitle1')}
                            placeholder="title can be icon，image or text"
                        >
                        <i style={{fontSize:'22px',lineHeight:'22px'}} className="iconfont icon-wode"></i>
                    </InputItem>
                    <InputItem
                            {...getFieldProps('inputtitle2')}
                            placeholder="title can be icon，image or text"
                        >
                        <i style={{fontSize:'33px',lineHeight:'33px'}} className="iconfont icon-mima"></i>
                    </InputItem>
                    <WingBlank>
                        <button onClick={this.showIndex} style={{width:'100%',height:'50px',backgroundColor:'#3fcccb',border:'1px solid #3fcccb',borderRadius:'3px'}}>登录</button>
                    </WingBlank>
                </List>
            </div>
        )
    }
}
const LoginInWrapper = createForm()(LoginIn);
export default LoginInWrapper;
