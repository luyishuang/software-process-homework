import React,{Component}from 'react';
import PropTypes from 'prop-types';

export default class Todoing extends Component{

    // delItem(idx,e){
    //     console.log(e);
    //     this.props.del(idx,e);
    // }
    render() {
        var {dol,del,change} = this.props;
        return (
             <div>
                 <h2>正在进行</h2>
                {   //里面是一个值,非语句
                    dol.map((item,idx)=>{
                        // if(JSON.parse(item).done===false){
                        //     return <div><input type="checkbox"  key={JSON.parse(item).title} onClick={(e)=>{change(JSON.parse(item).title,e)}}/>{JSON.parse(item).title}----<button onClick={(e)=>{del(JSON.parse(item).title,e)}}>删除</button></div>                      

                        // }
                        return <li key={idx}>{item}----<button onClick={(e)=>{del(idx,e)}}>删除</button></li>
                        // return <li key={idx}>{item}----<button onClick={this.delItem.bind(this,idx)}>删除</button></li>

                    })
                    // dol.filter((item)=>{
                    //     return JSON.parse(item).done === true?"":<li><input type="checkbox"  key={JSON.parse(item).title} onClick={(e)=>{change(JSON.parse(item).title,e)}}/>{JSON.parse(item).title}----<button onClick={(e)=>{del(JSON.parse(item).title,e)}}>删除</button></li>
                    // })
                }
                {/* <h2>已完成</h2>
                {
                    dol.map((item)=>{
                        if(JSON.parse(item).done===true){
                            return <div><input type="checkbox"  key={JSON.parse(item).title} onClick={(e)=>{change(JSON.parse(item).title,e)}}/>{JSON.parse(item).title}----<button onClick={(e)=>{del(JSON.parse(item).title,e)}}>删除</button></div>   
                        }
                    })
                    // dol.filter((item)=>{
                    //     return JSON.parse(item).done === true?"<li><input type='checkbox'  key={JSON.parse(item).title} onClick={(e)=>{change(JSON.parse(item).title,e)}}/>{JSON.parse(item).title}----<button onClick={(e)=>{del(JSON.parse(item).title,e)}}>删除</button></li>":''
                    // })
                } */}
                 
             </div>
        );
    }
}

Todoing.propTypes={
    todo:PropTypes.array,
    del:PropTypes.func
}

/**
 *  设置默认值
 */
// Todoing.defaultProps={
//     todo:[1,12,3]
// }