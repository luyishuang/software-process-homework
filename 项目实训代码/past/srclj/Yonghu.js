import React, { Component } from 'react'

export default class Yonghu extends Component {
    render() {
        return (
            <div>
                <div className='psup'>
                   <span>
                       用户管理
                    </span> 
                    <input name='keyword' placeholder='请输入想查找的用户相关信息' type='search' />
                    <button></button>
                </div>
                <div className='psmiddle'>
                    <input type='checkbox'  />
                    <span>用户名</span>
                    <span>密码</span>
                    <span>操作</span>
                </div>
                <div className='yhdown'>    
                    <li>
                        <input type='checkbox'  />
                        <span>白云</span>
                        <span>00000000</span>
                        <span>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>白云</span>
                        <span>00000000</span>
                        <span>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>白云</span>
                        <span>00000000</span>
                        <span>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>白云</span>
                        <span>00000000</span>
                        <span>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>白云</span>
                        <span>00000000</span>
                        <span>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>白云</span>
                        <span>00000000</span>
                        <span>
                            <button>删除</button>
                        </span>
                    </li>
                </div>
            </div>
        )
    }
}
