import {createStore,applyMiddleware,compose} from "redux";
import todo from "./reducer";
import thunk from 'redux-thunk';

let store = createStore(todo,applyMiddleware(thunk));

export default store;

/**
 *  redux、react-redux、redux-thunk
 *  redux:状态管理的容器    action、reducer、store
 *  
 */