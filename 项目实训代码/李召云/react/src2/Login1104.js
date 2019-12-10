import React from 'react';
import {connect} from 'react-redux';
import { LOGIN_SUCCESS } from './actions/actionTypes';
// import {log} from './actions';
import {logFetch} from './actions';
import Button from './Button1104';
import {bindActionCreators} from 'redux';

function Login(props){

    // function loginin(){
    //     //redux-thunk 允许dispatch一个函数，
    //     //在函数里面可以执行异步操作，函数的参数是dispa
    //     props.dispatch(logFetch()); 
    //     // fetch('https://cnodejs.org/api/v1/user/alsotang')
    //     // .then(res=>res.json())
    //     // .then((res)=>{
    //     //     console.log(res);
    //     //     let user={
    //     //         loginname:res.data.loginname,
    //     //         score:res.data.score
    //     //     }
    //     //     props.dispatch(log(user))
    //     //     props.history.push('/');    //可退回到当前页
    //     //     //props.history.replace()   按后退键，无法返回当前页
    //     // })
    // }
    // let newlog = bindActionCreators(logFetch,props.dispatch);   //相当于dispatch
    return (
        <div>
            <input type='text'/>
            <input type='password'/>
            {/* <button onClick={loginin}>登录</button> */}
            {/* <Button log={newlog}/> */}
            <Button log={props.newlog}/>

        </div>
    )
}

/**
 * 
 */
let mapStateToProps = (state)=>{};
let mapDispatchToProps =(dispatch)=>{
    return {
        newlog:bindActionCreators(logFetch,dispatch)
    }
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);