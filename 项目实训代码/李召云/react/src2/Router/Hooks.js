import {useHistory,useLocation,useParams} from "react-router-dom";
import React, { Component } from 'react'

export default function Hooks(){
    let history = useHistory();    //返回的是this.props.history
    let {id} = useParams();
    console.log("id:"+id);
    function toHoc(){
        history.push("/hoc");
    }
    return <div>
            <button onClick={toHoc}>Hook跳转到Hoc</button>
        </div>
}