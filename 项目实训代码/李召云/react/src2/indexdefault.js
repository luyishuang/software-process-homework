// import React from 'react';
import React,{Fragment,Component}from 'react';    //直接引入Fragment。
import ReactDOM from 'react-dom';
import './index.css';
// import ShowTime from "./ShowTime.js";
import ToDoList from './toDoList/ToDoList';
// import App from './App';
import Request from "./Request";
import Parent from "./Context/Parent";
// import {Provider} from "./Context/Context";
import {con, con2} from "./Context/Context";
import Hoc from "./Hoc/Hoc";
import Portal from "./Portal/Portal";
import ParentProtal from "./Portal/ParentProtal"
import Appl from "./Appl"
import List from "./List/List"


// ReactDOM.render(<ToDoList/>,document.getElementById('root'));
// ReactDOM.render(<List/>,document.getElementById('root'));

// ReactDOM.render(<Request/>,document.getElementById('root'));

/**
 * Context:
 *   1.生成Context，可写在一个js文件中，export导出
 *   2.在根组件(或需要传数据的地方)import Provider，并配置Provider，加上value属性
 *   3.在需要获取数的组件import Consumer，并配置Consumer
 *   Consumer组件里是个函数，函数的参数是传过来的value值
 */
let id=125;
ReactDOM.render(
    // <Provider value={id}>
    //     <Parent />
    // </Provider>
    <con.Provider value={{id:id,a:'564231sdcvx'}}>
        <div>
        </div>
        <con2.Provider value='sdaf'></con2.Provider>
        <Parent />

    </con.Provider>
    ,document.getElementById('root'));


// ReactDOM.render(<Hoc/>,document.getElementById("root"));
// ReactDOM.render(<ParentProtal />,document.getElementById("root"));
// ReactDOM.render(<Appl />,document.getElementById("root"));



/**
 *  10-9 ch02
 */

//显示当前系统时间
// function show(){
//     //只会渲染不一样的地方。
//     var ele = <div>{new Date().toLocaleString()}</div>; //一旦创建，属性不可改变
//     ReactDOM.render(ele,document.querySelector('#root'));
// }
//setInterval(show,1000)        将函数体交给setInterval循环执行； show()：将返回值给setInterval，循环执行
// setInterval(()=>{
//     show();
// },1000);

    /**
     *      组件
     */
//1.函数定义组件    函数名首字母大写
// var num = 20;
// function ShowTime(props){   //参数为只读,是个对象
//     return (        //返回内容多时加(),返回的只能是一个元素(一个闭合标签)，内容多时拼成一个返回
//         // <div>
//         //     <div>{props.name}{props.age}</div>
//         //     <div>{new Date().toLocaleString()}</div>
//         // </div>

//         /**
//          *  <React.Fragment></> 仅起到包裹作用，不添加到DOM结构中
//          */
//         //直接引入fragment后，可写为<Fragment></Fragment>
//         <Fragment>      
//             <div>{props.name}{props.age}</div>
//             <div>{new Date().toLocaleString()}</div>
//         </Fragment>
        
//     )
// }
// var num=[1,2,3];

//2.用类定义组件      尽量少用类

// ReactDOM.render(<ShowTime name="zhang" age={num}/>,document.getElementById('root'));   //以标签的形式调用组件
/**
 *  组件交互
 *  父组件->子组件：调用子组件时添加属性，子组件通过props(函数为props，类为this.props)拿到传递的
 *  子组件->父组件
 */














// ReactDOM.render(<App />, document.getElementById('root'));
// var str = 'react';
// var obj={
//     type:"div",
//     props:{
//         class:"hi",
//         children:[  //描述react标签的内容
//             'hello',
//             'react',
//             {
//                 type:"h1",
//                 props:{
//                     class:"pp",
//                     children:[  //描述react标签的内容
//                         'title',
//                         'react',
//                         'dsjakfnkj',
//                         {
//                             type:"h5",
//                             props:{
//                                 class:"yy",
//                                 children:[  //描述react标签的内容
//                                     'I',
//                                     'up',
//                                     '❤',
//                                 ]
//                             }
//                         }
//                     ]
//                 }
//             }
//         ]
//     }
// }
// var ele = <h1 class="hi">hello {str}</h1>      //遇到 < 会把后面的内容转化为对象

// var ele = React.createElement(
//     "h1",{id:'hh',class:'pp'},'hello',
//     React.createElement("p",{id:'hh',class:'pp'},'react')
// );
// ReactDOM.render(ele, document.getElementById('root'));      //ele实际传入的是对象


//自己封装render(渲染函数)
// function render(obj,container){
//     var {type,props} = obj;

//     /**
//      *  文档碎片    存在内存中的变量。类似虚拟的dom结点。多次dom操作保存，最后一次渲染。
//      *  
//      *  页面重绘(repaint)：除引起回流的事件外，如：颜色变化(背景色、字体颜色、边框颜色)
//      *  页面回流(重排reflow)：dom结构变化、内容变化、大小、位置变化会引起       代价大，浏览器会执行一些操作
//      * 
//      *  回流一定会引起重绘
//      */

//     //原因： 页面展现过程
//     /**
//      *  请求HTML页面，浏览器HTML解析器会解析html文件，生成dom树
//      *  link引入css文件，css解析器解析css，生成css对象模型(css规则)--CSSOM,
//      *  CSSOM和DOM树结合生成一个render tree(渲染树)--最终呈现的内容，
//      *  最后浏览器会绘制页面进行呈现
//      */
//     var fragment = document.createDocumentFragment();


//     var ele = document.createElement(type); //虚拟dom
//     for (var key in props) {
//         if(key === 'class'){
//             ele.className = props[key];
//         }else if(key === 'children'){   //children是子元素，不在其属性上
//             for(var i=0;i<props.children.length;i++){
//                 if(typeof props.children[i] === 'object'){
//                     render(props.children[i],ele);
//                 }else{
//                     var txt = document.createTextNode(props.children[i]);
//                     ele.appendChild(txt);
//                 }
//             }
//         }else{
//             ele[key] = obj.props[key];    // . 访问，仅访问名字；[]访问
//         }
//     }
//     fragment.appendChild(ele);
//     container.appendChild(fragment);
//     // container.appendChild(ele);
// }

// render(obj,document.getElementById('root'));

/**
 * ------------------------- 性能提升-------------------
 */

//1.先用变量进行dom处理，最后一次渲染
// console.time('time');
// var str ='';
// var div = document.getElementById("root");
// for(var i=0;i<1000;i++){
//     str += '<p>'+i+'</p>';
// }
// div.innerHTML +=str;
// console.timeEnd("time");


//2.样式处理
//在css中声明一个css类
// var div =document.getElementById("root");
// div.style.width="100px";
// div.style.height = '100px';
// div.style.backgroundColor="red";
/**
 *  .active{
 *      width:100px;
 *      height:100px;
 *      background:red;
 * }
 * div.className = 'active';
 */
// div.className = 'active';


//3.offsetLeft、offsetRight、offsetWidth、offsetHeight 等都会引起回流
// var wid = div.offsetWidth;
// setInterval(()=>{
//     wid+=1;
//     div.style.width = wid+"px";
//     // div.style.width = (div.offsetWidth+1)+"px";
// },1000)

//4.文档碎片




