import React from 'react';

export default function Button(){
    function loginin(props){
        props.log();
        //redux-thunk 允许dispatch一个函数，
        //在函数里面可以执行异步操作，函数的参数是dispa
        // props.dispatch(logFetch()); 
    }

    return (
        <button onClick={loginin}>登录</button>
    )
}