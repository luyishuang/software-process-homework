import React, { Component } from 'react'

export default class Toinput extends Component {

    /**
    *  受控组件：
    *      value值被react控制的表单元素
    * 
    *   可实现获取表单元素的值(表单验证)/
    */


    // constructor(){
    //     super();
    //     this.handleInput = this.handleInput.bind(this); //bind将当前类的this，指向父类的this
    // }
    // handleInput(e){  //自己声明的不会自动执行,并且拿不到this
    //     if(e.keyCode === 13){   //按下回车的情况。 按照每个键对应的键值判断，是否为回车
    //         console.log(e.target.value);  //e.target代表当前触发事件的input结点
    //         this.props.add();
    //     }
    // }
    constructor(){
        super();
        this.handleInput=this.handleInput.bind(this);
        this.state={
            a:"",
            b:"",
            c:""
        }
    }
    handleInput=(e)=>{  
        //绑定this，事件处理函数写成箭头函数
        if(e.keyCode === 13){
            console.log(e.target.value);  
            this.props.add(e.target.value);
        }
    }
    handleChange=(e)=>{
        this.setState({
            // inputValue:e.target.value
            [e.target.name]:parseInt(e.target.value===''?0:e.target.value)
        })
    }
    componentDidMount(){

        this.a.focus();
        this.refs.b.focus();  //ref=“b”   时，字符串作为refs的属性名，属性值为当前ref所在的结点
    }
    render() {
        return (
            <ul className={this.state.b+this.state.c>10?"box":""}>
               <ul> 
                <input type='text' onKeyDown={(e)=>{this.handleInput(e)}}></input>
                <input ref={(inp)=>{this.a=inp}} name="a" onChange={this.handleChange} value={this.state.a}  type='text' onKeyDown={this.handleInput}></input>
                +
                <input id="inm" ref="b" name="b" onChange={this.handleChange} value={this.state.b}  type='text' onKeyDown={this.handleInput}></input>
                +
                <input name="c" onChange={this.handleChange} value={this.state.c}  type='text' onKeyDown={this.handleInput}></input>                
                =

                <p>{this.state.a+this.state.b+this.state.c}</p>
                <input type='text' name="d" ref={(inp)=>{this.inp=inp}}></input>   
                {/**
                    ref方法将获取到的标签结点的引用赋给形参，可将次属性写在this上属性，别的地方可以直接访问该结点

                    非受控组件：
                    一次性处理表单元素的值，ref直接拿到结点
                */}     
                <label htmlFor="inm">请输入第一个数</label>
                <button className="btn" onClick={()=>{console.log(this.inp.value)}} style={{color:"red",fontSize:"100px;"}}>提交</button>
            </ul>
            // </ul>
        )
    }
}

/**
 *  受控组件：
 *    1.给input小钱加value属性，赋值为state的值
 *    2.给input标签绑定onChange事件，
 *    在事件处理函数中setState
 *    3.一个事件处理函数控制多个表单元素时，
 *      给input标签加上name属性，事件处理函数中写：
 *      setState({[e.target.name]:e.target.value})
 */
