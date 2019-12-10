import React,{Fragment,Component}from 'react';    //直接引入Fragment。
class ShowTime extends Component{
    constructor(){
        super();    //构造器中必有,否则this找不到；若不传props，则找不到this.props ；其他函数中无限制
        this.state = {      //状态只能设置当前组件下的变量
            time:new Date().toLocaleString(),
            a:100,
            b:20
        }
        setInterval(()=>{
            this.setState({     //修改数据
                time:new Date().toLocaleString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        if(this.state.a>10){
            return true;
        }
        return false;
    }
    
    componentDidUpdate(preProps,preState,data){ //
        console.log('didupdate');
        console.log(preState);
        console.log(this.state.time);
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshot");
        /**处理name */
        return {name:this.state.a};
    }
    componentDidMount(){
        console.log("didmount");
    }
    render(){   //加载过程中，自动执行
        var {name,age} = this.props;
        return (
        <Fragment>
            {/**条件渲染   标签要不要显示*/}
            {   /**里面只能放值 */  
                name.length>5 ? <div>{name}</div> :''    //相当于if-else
            }
            {
                name.length>5&&<div>{name}</div> //相当于if
            } 
            <div>{this.state.time}</div>
            {/**循环渲染 */}
            <div>
                {
                    age.map((item,index)=>{
                        if(index%2===0){
                            return <p key={item}>{item}</p>
                        }
                    })
                }
            </div>
        </Fragment>
        )
    }
    /**
     *  若想在构造函数内声明变量，使得所有对象都可用，需要用状态。
     */
}

/**
 * 默认导出:只能导出一次
 * 被引入时可以重命名
 * export   default  ShowTime
 * 
 * 命名导出:    如何导出如何引入。  可多个导出
 * 被引入时，与导出的名一致
 * export {ShowTime}
 * export const num=100;
 * export const com = 100;
*/
export default ShowTime;  


