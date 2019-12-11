import React, { Component } from 'react';
import ReactDOM from "react-dom";
import App from "./App0";
import "./index.css"

/**
 *  容器组件 / UI组件(展示组件)         
 *  只能组件 / 木偶组件
 * 
 *  容器组件(container/pages)：逻辑、功能               类组件
 *  UI组件(components)：展示，返回React元素             函数组件
 */

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)