/**
 * 生成action对象
 */

import * as types from "./actionTypes"; //引入所有的对象,重命名为types
// import { types } from "@babel/core";

export function addItem(value){
    return {
        type:types.ADD_ITEM,
        value
    }
}

export function deleteItem(idx){
    return {
        type:types.DELETE,
        idx
    }
}

export const change = (value)=>(
    {
        type:types.CHANGE,
        value
    }
)

export const log = (value)=>(
    {
        type:types.LOGIN_SUCCESS,
        value
    }
   
)

//异步
export const logFetch=(value)=>{
    return (dispatch)=>{
        fetch('https://cnodejs.org/api/v1/user/alsotang')
        .then(res=>res.json())
        .then((res)=>{
            console.log(res);
            let user={
                loginname:res.data.loginname,
                score:res.data.score
            }
            // dispatch(log(user));
            // props.history.push('/');    //可退回到当前页
            //props.history.replace()   按后退键，无法返回当前页
            dispatch({
                type:types.LOGIN_SUCCESS,
                value
            })
        })
    }
}