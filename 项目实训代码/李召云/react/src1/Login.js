import React, { Component,useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom';
export default function Login(){
        let history = useHistory();
        let [user,setUser]=useState("");
        let [pwd,setPwd]=useState("");
        function toHome(){
          console.log(user,pwd);
          fetch('/backlogin',{
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `busername=${user}&bpwd=${pwd}`
          })
          .then(res=>res.json())
          .then(res=>{
            console.log(res);
            if(res=="success"){
              history.push('/home/shouye');
            }
          })

        }
        function toJoin(){
          history.push('/join');
        }
        

        return (
          <div className='bg'>
                 <div className='top'>
                    <div className='title'>知行后台登陆系统</div>
                    <div className='content'>
                      <p className='con1'>用户名：  
                        <input name='name' type='text' value={user} onChange={(e)=>setUser(e.target.value)}/>
                      </p>
                      <p className='con1'> 密&nbsp;&nbsp;&nbsp; 码：   
                        <input name='pwd' type='password' value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                      </p>
                      <p className='con'>
                        <button onClick={toHome}>登陆</button>
                        <button onClick={toJoin}>注册</button>
                      </p>
                    </div>
                 </div>
          </div>
        )
}