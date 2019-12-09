import React, { Component } from 'react'
import {useHistory} from 'react-router-dom';

export default function Join(){
    let history = useHistory();
    function toLogin(){
        history.push('/');
    }
        return (
            <div className='bg'>
                 <div className='top'>
                    <div className='title'>知行后台注册页面</div>
                    <div className='content'>
                      <p className='con2'>用 户 名： &nbsp; 
                        <input name='name' type='text' />
                      </p>
                      <p className='con2'> 密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 码：   
                        <input name='pwd' type='password' />
                      </p>
                      <p className='con2'> 确认密码：&nbsp;
                          <input name='repwd' type='password' /> 
                      </p>
                      <p className='con'>
                        <button onClick={toLogin}>注册</button>
                        <button onClick={toLogin}>返回</button>
                      </p>
                    </div>
                 </div>
          </div>
        )
}
