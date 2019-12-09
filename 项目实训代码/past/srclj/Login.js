import React, { Component } from 'react'
import {useHistory} from 'react-router-dom';
export default function Login(){
        let history = useHistory();
        function toHome(){
            history.push('/home/shouye');
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
                        <input name='name' type='text' />
                      </p>
                      <p className='con1'> 密&nbsp;&nbsp;&nbsp; 码：   
                        <input name='pwd' type='password' />
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