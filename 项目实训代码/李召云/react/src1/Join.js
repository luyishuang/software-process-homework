import React, { Component,useState,useEffect } from 'react'
import {useHistory} from 'react-router-dom';

export default function Join(){
    let history = useHistory();
    let [username,setUsername] = useState("");
    let [pwd,setPwd]=useState("");
    let [recheck,setRecheck] = useState("");
    function toLogin(){
      if(recheck !== pwd ){
        console.log("wrong");
      }
      else if(username === ''){
        console.log("不能为空");
      }
      else{
        // fetch('/backjoin/add',{
        //   method: "POST",
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded'
        //     },
        //     body: `busername=${username}&bpwd=${pwd}`
        // })
        // .then(res=>res.json())
        // .then(res=>{
        //   console.log(res);
        // })

        history.push('/');
      }
    }

    function back(){
      history.push('/');

    }
    

        return (
            <div className='bg'>
                 <div className='top'>
                    <div className='title'>知行后台注册页面</div>
                    <div className='content'>
                      <p className='con2'>用 户 名： &nbsp; 
                        <input name='name' type='text' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                      </p>
                      <p className='con2'> 密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 码：   
                        <input name='pwd' type='password' value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                      </p>
                      <p className='con2'> 确认密码：&nbsp;
                          <input name='repwd' type='password' value={recheck} onChange={(e)=>setRecheck(e.target.value)}/>
                          <span style={{color:"red"}}>密码不一致</span> 
                      </p>
                      <p className='con'>
                        <button onClick={toLogin}>注册</button>
                        <button onClick={back}>返回</button>
                      </p>
                    </div>
                 </div>
          </div>
        )
}
