import React, { Component } from 'react';
import Todoing from './Todoing';
import Toinput from './Toinput';
import './todo.css';

export default class ToDoList extends Component {
    constructor(){
        super();
        this.state={
            todo:[JSON.stringify({"title":1,done:false})]
            // todo:[{"title":1,done:false},{"title":2,done:false},{"title":3,done:false}]

        }

         /**
         *  深拷贝---浅拷贝
         */
        // var obj = {a:100,b:[1,2,3]};
        // var obj1 ={c:300};
        // // var o = obj;
        // // var o = {...obj};
        // // var o = JSON.parse(JSON.stringify(obj));
        // var o = Object.assign(obj,obj1);        //合并。合并到谁身上就先写谁。
        // // var o = Object.assign({},obj,obj1);  生成新的对象
        // // o.b[0] = 200;   //obj内层依旧是浅拷贝。obj的b和o的b指向相同
        // console.log(o === obj);     //true
        // Object.keys(obj).forEach(item => {
        //    console.log(item);
        //    console.log(obj[item]); 
        // });

    }
    componentDidMount(){
        this.setState({
            todo:JSON.parse(localStorage.getItem("todo"))
        })
    }
    addItem=(data)=>{  //子组件向父组件传数据，应用父组件给子组件传函数实现
        // console.log(data);
        this.setState({
            // todo:[...this.state.todo,data]
            todo:[...this.state.todo,JSON.stringify({"title":data,done:false})]
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo));
        })
        
    }
    delItem=(key,event)=>{

    /**
     *  1.不能直接改变或处理state，通过setState改变
     *  2.setState是异步执行
     */

        // console.log(event.target);
        // let todo = [...this.state.todo];
        // todo.splice(key,1);  
        // this.setState({
        //     todo:todo
        // },()=>{
        //     console.log(this.state.todo);
        // })

        this.setState((state,props)=>{  //state拿到执行之前的值     props：拿到当前需要的props属性
                let todo = [...this.state.todo];
                todo.splice(key,1);   //可删除/添加任意一项
                localStorage.removeItem(key);
            return {
                todo:todo
                // todo:state.todo.filter((item,index)=>key!==index)  //过滤，符合条件的返回
            }
        },()=>{
            localStorage.setItem("todo",JSON.stringify(this.state.todo))
        })
    }

    changeItem=(key,event)=>{
        var list=JSON.parse(localStorage.getItem("todo"));
        for(var i=0;i<list.length;i++){
            
            if(JSON.parse(list[i]).title === key){
                if(JSON.parse(list[i]).done === false){
                    list[i] =JSON.stringify({"title":key,done:true});
                }
                else{
                    list[i] =JSON.stringify({"title":key,done:false});
                }
                // JSON.parse(list[i]).done = true;
                localStorage.setItem("todo",JSON.stringify(list));
                console.log(JSON.parse(list[i]).done);
            }
        }
        // console.log(list);
    }

    render() {
        return (
            <div>
                <Toinput add={this.addItem}/>      
                <Todoing dol={this.state.todo} del={this.delItem} change={this.changeItem}/>
            </div>
        )
    }
}
