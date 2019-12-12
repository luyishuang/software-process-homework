import {combineReducers} from 'redux';
import {ADD_ITEM,CHANGE,DELETE,LOGIN_SUCCESS} from "../actions/actionTypes";

let todos=[1,2,3];

function todo(state=todos,action){

    switch (action.type) {
        case ADD_ITEM:
            return [...state,action.value];
        case DELETE:
            return state.filter((item,idx)=>{
                return action.value !== idx;
            })
            // let newstate = [...state];
            // newstate.splice(action.value,1);
            // return newstate;
        default:
            return state;
    }
}

// let obj={
//     a:1,
//     b:2
// }
// return Object.assign({},{...obj,a:action.value});

let inputValue='todolist';

function changeValue(state=inputValue,action){
    switch (action.type) {
        case CHANGE:
            return action.value;
        default:
            return state;
    }
}

// let userInfor = {
//     loginname:'',
//     score:0
// }

// function login(state=userInfor,action){
//     switch(action.type){
//         case LOGIN_SUCCESS:
//             console.log(action.value);
//             return action.value;//传入对象
//         default:
//             return state;
//     }
// }

let like='dislike';
function changelike(state=like,action){
    switch(action.type){
        case 'LIKE':
            return action.value;
        case 'DISLIKE':
            return action.value;
        default:
            return state;
    }
}

let userInfor = {
    loginname:'admin',
    // headimgpath:''
};
function getusername(state=userInfor,action){
    switch(action.type){
        case 'GETUSERINFO':
            return state;
        case 'CHANGEUSER':
            let newuser = {
                loginname:action.value
            }
            return newuser;
        default:
            return state;
    }
}

let reducer=combineReducers({   //两个reducer合并成一个对象
    todo:todo,
    change:changeValue,
    // loginIn:login,
    changelike:changelike,
    getuser:getusername
})



export default reducer;