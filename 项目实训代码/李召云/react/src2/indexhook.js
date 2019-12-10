/**
 *  hooks：
 *      代替类组件的一些功能(使函数组件具有类组件的一些功能)
 *      只能在函数组件中用
 */
import React,{Component,useState,useEffect} from 'react';
import {render} from "react-dom";
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Addnum from './Addnum';

/**
 *  函数组件：
 *      无生命周期、无状态
 *      适合做UI组件
 *      属性props是只读的，不能修改
 */
function Titile(props){
    return <h1>hello {props.titile}</h1>;
}

//声明一个组件，点击按钮，实现+1的功能
//声明一个类组件(state是类组件中特有的，只能在当前组件中用，存储当前组件中的数据)
// class Counter extends Component{
//     constructor(){
//         super();
//         this.state={
//             num:0
//         }
//     }
//     Addnum=()=>{
        
//         this.setState((state)=>{    //攒到一定量以后再执行,每次拿到上一个的值
//             return {
//                 num:state.num+1
//             }
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <p>{this.state.num}</p>
//                 <button onClick={this.Addnum}>+</button>
//             </div>
//         )
//     } 
// }

function Counter(){
    let [num,setNum] = useState(0);
    // let sum = useState(0);
    // let num=sum[0];
    // let setNum=sum[1];


    function add(){
        // setNum(num+1);
        setNum((n)=>{   //拿到上一个值后进行操作
            return n+1
        });
    }

    return (
        <div>
            <p>{num}</p>
            <button onClick={add}>+</button>
        </div>
    )
}

//实时显示系统时间
// class Time extends Component{
//     constructor(){
//         super();
//         this.state={
//             time:new Date().toLocaleString()
//         }
//     }

//     componentDidMount(){
//         this.timer=setInterval(()=>{
//             let now = (new Date).toLocaleString();
//             this.setState((state)=>{
//                 return{
//                     time:now
//                 }
//             })
//         },1000)
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer);
//     }


//     render(){
//         return (
//             <div>{this.state.time}</div>
//         )
//     }
// }
function Time(props){
    /**
     * 状态可以写多个   
     *  写在函数组件最顶层(按照声明顺序依次向前赋值)
    */
    let [time,setTime] = useState(0); 
    // let [topic,setTopic] = useState([]);

    /**
     *  useEffect 能够代替componentDidMount和componentDidUpdate
     *  还能代替componentWillUnmount
     *  可以写多个，按照顺序执行
     */
    useEffect(()=>{ //相当于生命周期，在特定时间执行    
        let id=setInterval(()=>{
            setTime((time)=>time+1)
        },1000);

        return ()=>{    //返回一个函数，空数组导致只有销毁时执行，没有数组的话每次都会执行  加空数组只有在挂载和卸载的时候执行，没有的话更新的时候也会执行
            clearInterval(id);
        }
    },[]);  //当数组中的元素有任何一个变化时，会重新调用useEffect

    let page = props.match.params.page;    
    // useEffect(()=>{     //内部操作如果没有导致属性改变，则只执行一次
    //     fetch('https://cnodejs.org/api/v1/topics?page='+page)
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res);
    //         setTopic(res.data);
    //     })
    // },[page]);
    let topic = useFetch('https://cnodejs.org/api/v1/topics?page='+page,[page]);


    return <div>
        {time}
        {
            topic.map((item)=><p>{item.title}</p>)
        }
    </div>
}


//自定义hook
function useFetch(url,d){
    let [data,setData]=useState([]);
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(res=>{
            setData(res.data);
        })
    },[...d])   //监听数组，需要传入数组
    return data;
}


// ReactDOM.render(<Titile titile='hook' />,document.getElementById('root'));
// ReactDOM.render(<Addnum/>,document.getElementById('root'));
// render(<Counter/>,document.getElementById('root'));
// render(<Time/>,document.getElementById('root'));
render(<Router>
        <div>
            <ul>
                <li><Link to='/counter'>Counter</Link></li>
                {/* <li><Link to='/time'>showTime</Link></li> */}
                <li><Link to='/time/1'>showTime1</Link></li>
                <li><Link to='/time/2'>showTime2</Link></li>
            </ul> 
            <div>
                <Route path='/counter' component={Counter}/>
                <Route path='/time/:page' component={Time}/>
            </div>
        </div>
    </Router>,
    document.getElementById('root')
);



