import React,{Component}from 'react';
import "./list.css";

export default class Listdoing extends Component{

    delItem(item,e,flag,undo){
        
        this.props.del(item,e,flag,undo);
    }
    
    render() {
        var {del,change,doing,done} = this.props;
        // console.log(doing.length===0?"0":doing.length);
        return (
             <ul className="biglist">
                 <h2>正在进行<span>{doing.length}</span></h2> 
                 
                {   
                    doing.map((item)=>{
                            return <li key={item+Math.random()}><input type="checkbox" onClick={(e)=>{change(item,e,false)}}/>{item}<button onClick={(e)=>{del(item,e,false,true)}}>删除</button></li>                      
                    })
                }
                <h2 className="done">已完成 <span>{done.length}</span></h2>
                
                {
                    done.map((item)=>{
                            return <li key={item+Math.random()}><input type="checkbox" readOnly={true} checked="checked" onClick={(e)=>{change(item,e,true)}}/>{item}<button onClick={(e)=>{del(item,e,true,true)}}>删除</button></li>   
                        }
                    )
                    
                }
                 
             </ul>
        );
    }
}
