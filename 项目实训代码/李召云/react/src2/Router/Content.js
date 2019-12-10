import React from 'react'

//无状态组件        函数组件    没有this
export default function Content(props){
    console.log(props);
    function toHoc(){
        props.history.push("/hoc")
    }
    return(
        <div>
            {props.children}
            {/* 内容为直接使用标签(非路由调用)时，标签内嵌套的内容. */}

            Content
            {/* Content{props.match.params.id} */}
            <button onClick={toHoc}>跳转到HOc组件</button>
        </div>
    )
}
