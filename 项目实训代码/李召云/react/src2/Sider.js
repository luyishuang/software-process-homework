import React, { Component } from 'react'
import {Link,NavLink} from "react-router-dom"
import {Button} from "antd"

export default class Sider extends Component {
    render() {
        let style = {float:'left'}
        return (
            <ul style={style}>
                <Button type="primary" clock>按钮</Button>
                <li>
                    {/* <Link to="/hoc">Hoc</Link> */}
                    {/* <Link to={{pathname:"/hoc",state:{id:100},search:'?user=zhang'}}>Hoc</Link> */}
                    {/* <Link to={{pathname:"/hoc",state:{id:100},search:'?user=zhang'}}>Hoc</Link> */}
                    <NavLink activeStyle={{background:"blue",color:"pink"}} to={{pathname:"/hoc",state:{id:100},search:'?user=zhang'}}>Hoc</NavLink>
                    {/* activeStyle:被选中时添加的样式 */}

                </li>
                <li>
                    {/* <Link to="/parent">Parent</Link> */}
                    <NavLink activeStyle={{background:"blue",color:"pink"}} to="/parent">Parent</NavLink>

                </li>
                <li>
                    <NavLink activeStyle={{background:"blue",color:"pink"}} to="/hooks">hooks</NavLink>

                </li>
                {
                    [0,1,2,3,4].map((item)=>{
                        return (
                            <li key={item}>
                                <NavLink activeStyle={{background:"blue",color:"pink"}} to={'/content/'+item} >帖子{item}</NavLink>
                            </li>
                        )
                    })
                }
                {
                    [1,2,3,4,5,6,7,8].map((item)=>{
                        return (
                            <li key={item}>
                                <NavLink activeStyle={{background:"blue",color:"pink"}} to={'/cnode/'+item} >cnode{item}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
