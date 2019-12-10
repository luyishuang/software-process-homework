import React, { Component } from 'react';
import ListDoing from './ListDoing';
import ListInput from './ListInput';
import { stat } from 'fs';
// import './todo.css';

export default class List extends Component {
    constructor(){
        super();
        this.state={
            // todo:[],
            doing:[],
            done:[]
        }

    }
    componentDidMount() {
        let oldoing =localStorage.getItem("doing");
        let oldone = localStorage.getItem("done");
        let objdoing = JSON.parse(oldoing);
        let objdone = JSON.parse(oldone);
        this.setState((state)=>{
            if(objdone===null){
                localStorage.setItem("done",JSON.stringify(state.done));               
            }
            if(objdoing===null){
                localStorage.setItem("doing",JSON.stringify(state.doing));
            }
            if(objdone!==null&&objdoing!==null){
                return {
                    doing:objdoing,
                    done:objdone
                } 
            }
            
            
            
        })
        
    }

    addItem=(data)=>{  //子组件向父组件传数据，应用父组件给子组件传函数实现
        // console.log(data);
        this.setState((state)=>{
            // todo:[...this.state.todo,data],
            let doing = [...state.doing,data];
            console.log("add:"+doing);
            return{
                doing:doing
            }
        },()=>{
            // localStorage.setItem("todo",JSON.stringify(this.state.todo));
            localStorage.setItem("doing",JSON.stringify(this.state.doing));

        })
        
    }
    delItem=(item,event,flag,undo)=>{
        this.setState((state)=>{
                let doing =[...state.doing];
                let done=[...state.done];
                if(undo){
                    localStorage.removeItem(item);
                }
                if(flag){
                    done.splice(done.indexOf(item),1);
                    return {
                        done:done
                    }
                }else{
                    doing.splice(doing.indexOf(item),1);
                    return {
                        doing:doing
                    }
                }
        },()=>{
            localStorage.setItem("doing",JSON.stringify(this.state.doing));
            localStorage.setItem("done",JSON.stringify(this.state.done));


        })
    }

    changeItem=(text,event,changeFlag)=>{
        if(changeFlag){
            this.delItem(text,event,true,false);

            this.setState((state)=>{
                let adddo=[...state.doing,text];
                return {
                    doing:adddo
                }

            })
            localStorage.setItem("done",JSON.stringify(this.state.done));
        }
        else{
            this.delItem(text,event,false,false);
            this.setState((state)=>{
                let adone=[...state.done,text];

                return {
                    done:adone
                }

            })
            localStorage.setItem("doing",JSON.stringify(this.state.doing));

        }
    }

    render() {
        return (
            <div>
                <ListInput add={this.addItem}/>      
                <ListDoing del={this.delItem} change={this.changeItem} done={this.state.done} doing={this.state.doing}/>
            </div>
        )
    }
}
