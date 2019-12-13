import {createStore,applyMiddleware,compose} from "redux";
import todo from "./reducer";
import getuser from "./reducer";
import thunk from 'redux-thunk';

// let store = createStore(changelike,applyMiddleware(thunk));
let store = createStore(getuser);

export default store;

/**
 *  redux、react-redux、redux-thunk
 *  redux:状态管理的容器    action、reducer、store
 *  
 */