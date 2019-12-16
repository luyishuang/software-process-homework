import React,{Component} from "react"
import '../index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Pintu from '../game/Pintu'
import gameReducer from '../game/reducers/GameReducer'
export default class Home extends Component{
    render(){
        const store = createStore(gameReducer)
        return(
            <div>
                <Provider store={store}>
                    <Pintu />
                </Provider>
            </div>
            
        )
    }
}