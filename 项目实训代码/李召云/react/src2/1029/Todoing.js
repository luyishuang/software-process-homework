import React, { Component } from 'react'
import store from "../store";
import {DELETE} from "../actions/actionTypes";
import {connect} from 'react-redux';

// class Todoing extends Component {
//     constructor(){
//         super();
//         this.state={
//             todos:store.getState().todo
//         }
//     }

//     delitem = (idx)=>{
//         this.props.dispatch({
//             type:DELETE,
//             value:idx
//         })
//     }


//     componentDidMount(){
//         console.log(this.props);
//         this.id =store.subscribe(()=>{
//             // console.log("todoing");
//             this.setState({
//                 todos:store.getState().todo
//             })
//         })
//     }

//     componentWillUnmount(){
//         this.id();
//     }

//     render() {
//         return (
//             <ul>
//                 {
//                     this.state.todos.map((item,idx)=>(
//                         <li key={idx}>{item}<button onClick={()=>{this.delitem(idx)}}>删除</button></li>
//                     ))
//                 }
//             </ul>
//         )
//     }
// }

// let mapStateToProps =(state)=>{
//     return {
//         todos:state.todo
//     }
// }

// export default connect(mapStateToProps)(Todoing);     //connect返回值是高阶组件，第二个括号是传入子组件
function Todoing({dispatch,todos}){
    let delItem = (index)=>{
        dispatch({
            type: DEL_ITEM,
            index
        })
    }
    return (
        <ul>
            {
                todos.map((item,idx)=>(
                    <li key={idx}>
                        {item}----
                        <button onClick={()=>{delItem(idx)}}>删除</button>
                    </li>
                ))
            }
        </ul>
    )
}

let mapStateToProps = (state)=>{
    return {
        todos: state.todo
    }
}

export default connect(mapStateToProps)(Todoing);