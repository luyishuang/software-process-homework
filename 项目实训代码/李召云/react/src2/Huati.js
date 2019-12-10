import React, { Component } from 'react'

export default class Huati extends Component {
    render() {
        return (
            <div>
                <div className='psup'>
                   <span>
                       人员管理
                    </span> 
                    <input name='keyword' placeholder='请输入想查找的关键字' type='search' />
                    <button></button>
                </div> 
                <div className='psmiddle'>
                    <input type='checkbox'  />
                    <span>话题</span>
                    <span>用户</span>
                    <span>内容</span>
                    <span>时间</span>
                    <span>操作</span>
                </div>
                <div className='htdown'>    
                    <li>
                        <input type='checkbox'  />
                        <span>走进紫禁城</span>
                        <span>白云</span>
                        <span>……</span>
                        <span>2019.11.28</span>
                        <span>
                            <button>查看</button>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>走进紫禁城</span>
                        <span>白云</span>
                        <span>……</span>
                        <span>2019.11.28</span>
                        <span>
                            <button>查看</button>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>走进紫禁城</span>
                        <span>白云</span>
                        <span>……</span>
                        <span>2019.11.28</span>
                        <span>
                            <button>查看</button>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>走进紫禁城</span>
                        <span>白云</span>
                        <span>……</span>
                        <span>2019.11.28</span>
                        <span>
                            <button>查看</button>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>走进紫禁城</span>
                        <span>白云</span>
                        <span>……</span>
                        <span>2019.11.28</span>
                        <span>
                            <button>查看</button>
                            <button>删除</button>
                        </span>
                    </li>
                    <li>
                        <input type='checkbox'  />
                        <span>走进紫禁城</span>
                        <span>白云</span>
                        <span>……</span>
                        <span>2019.11.28</span>
                        <span>
                            <button>查看</button>
                            <button>删除</button>
                        </span>
                    </li>
                </div>
            </div>
        )
    }
}
