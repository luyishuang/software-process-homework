import React, { Component } from 'react';

let url = 'https://api.apiopen.top/musicRankingsDetails?type=1';

function getDisplayName(Com){
    return Com.displayName || Com.name || 'Component';
}   //多层高阶组件嵌套

function hoc(Com,url){  //Com是传入的某一个组件，相当于子组件
    class Fetch extends Component{  //相当于父组件
        constructor(){
            super();
            this.state=
            {
                data:[]
            }
        }
        componentDidMount(){//页面加载完成后执行
            fetch(url,{method:'post'}).then((res)=>res.json())
            .then((res)=>{
                console.log(res);   //直接res.result获取数据
                this.setState({
                    data: res.result
                })
            })
        }
        render(){
            return <Com {...this.props} data={this.state.data}/>
            // 把MyMusic传进的属性均拿到，并且以合适的方式添加到该标签上，传给子组件
        }
    }
    Fetch.displayName =`Fetch(${Com.name})`;
    return Fetch;
}

class Music extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.data.map((item,idx)=>{       //data和Com标签属性对应
                        return <li key={idx}>{item.title}</li>
                    })
                }
            </ul>
        )
    }
}
class Music2 extends Component{
    render(){
        return (
            <ul>
                {
                    this.props.data.map((item,idx)=>{       //data和Com标签属性对应
                        return <p key={idx}>{item.title}</p>
                    })
                }
            </ul>
        )
    }
}

let MyMusic = hoc(Music,url);
let MyMusic2 = hoc(Music2,url);


export default class Hoc extends Component {
    render() {
        console.log(this);

        return (
            <div>
                <MyMusic a="2" b="sd"/>
                <MyMusic2/>
            </div>
        )
    }
}
