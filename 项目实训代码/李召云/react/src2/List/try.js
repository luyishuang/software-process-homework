import React from 'react';
// import storage from '../modules/storage';
class Todolist1 extends React.Component{
    constructor(props){
        super(props);
        this.state={
                list:[],
                finishList:[
                  /*  {
                        title:"录制java",
                        checked:true
                    },
                    {
                        title:"录制react",
                        checked:false
                    },
                    {
                        title:"录制python",
                        checked:true
                    }*/
                ]
        };
    }

    //生命周期函数    页面加载就会触发
    componentDidMount(){
        //获取缓存的数据
        let todoList = storage.get("TodoList");
        if(todoList){
            this.setState({
                finishList:todoList
            })
        }
    }
    addData=(e)=>{
        if(e.keyCode==13){
            let title=this.refs.title.value;
            let tempList = this.state.finishList;
            tempList.push({
                title:title,
                checked:false
            })
            this.setState({
                list:tempList
            });
            //增加框设置为空
            this.refs.title.value="";
            //缓存数据,使用localStorage，而将一个对象转为字符串使用JSON.stringify()函数
            storage.set("TodoList",tempList);
        }
    }

    changeState=(key)=>{
        let templist =this.state.finishList;
        templist[key].checked =!templist[key].checked;
        this.setState({
            list:templist
        });
        storage.set("TodoList",templist);
    }
    deleteData=(key)=>{
        let templist =this.state.finishList;
        templist.splice(key,1);
        this.setState({
            list:templist
        })
        storage.set("TodoList",templist);
    }

    render(){
        return (
            <div>
                Todolist index
                <h2>Todolist演示</h2>
                <input ref="title" onKeyUp={this.addData}/>
                <hr/>
                <h2>

                </h2>
               <h2>正在进行</h2>

                <hr/>
                {
                    this.state.finishList.map( (value,key)=> {
                        if(value.checked==false){
                            return(
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.changeState.bind(this,key)}/>{value.title}
                                    ---<button onClick={this.deleteData.bind(this,key)}>删除</button>
                                </li>
                            )
                        }
                    })
                }
                <h2>已完成事项</h2>
                {
                    this.state.finishList.map( (value,key)=> {
                        if(value.checked==true){
                            return(
                                <li key={key}>
                                    <input type="checkbox" checked={value.checked} onChange={this.changeState.bind(this,key)} />{value.title}
                                    ---<button onClick={this.deleteData.bind(this,key)}>删除</button>
                                </li>
                            )
                        }
                    })
                }
                <hr/>



            </div>
        )
    }
}
export  default Todolist1;
