import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Lefter from './Lefter'
import Shouye from './Shouye'
import Person from './Person'
import Huati from './Huati'
import Yonghu from './Yonghu'
import Login from './Login'
import Artical from './Artical'
import Jingdian from './Jingdian'
import Addartical from './Addartical'

export default class Home extends Component {
    render() {
        return (
            <div style={{marginTop:'20px'}}>
                <div>
                    <Lefter/>
                </div>
                <div className='out'> 
                    <Route path='/home/shouye' component={Shouye} />
                    <Route path='/home/person' component={Person} />
                    <Route path='/home/huati' component={Huati} />
                    <Route path='/home/yonghu' component={Yonghu} />
                    <Route path='/home/artical' component={Artical} />
                    <Route path='/home/jingdian' component={Jingdian} />
                    <Route path='/home/addartical' component={Addartical} />
                </div>
                <Route exact path='/' component={Login} />
            </div>
        )
    }
}
