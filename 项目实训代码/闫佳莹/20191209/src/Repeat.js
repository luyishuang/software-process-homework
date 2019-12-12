import React,{Component} from 'react'
// export default class Repeat extends Component{
//     constructor(){
//         super();
//     }
//     inputChange(e){
//         alert(e.target.value)
//         this.setState({
//             username:e.target.value
//         })
//     }
//     getInputValue(){
//         alert(this.state.username)
//         console.log(this.state.username)
//     }
//     render() {
//         return (
//             <div>
//                 <input onChange={(e)=>this.inputChange(e)}/>
//                 <button onClick={()=>this.getInputValue} >获取input的值</button>
//             </div>
//         );
//     }
// }



export default class Repeat extends Component{

    constructor(props){
         super(props)
         this.state = {
             inputValue : ''
         }
     }

     // 监听input输入框中值的变化，并更新状态
     handleChange = (event) => {
         this.setState({
             inputValue : event.target.value
         })
     }

    render(){
        return (
            <div className="addtodolist">
                <div className="input"><input id='newitem' type = 'text' onChange={this.handleChange} placeholder='吃饭睡觉打豆豆'/></div>
                <div>
                    {this.state.inputValue}
                </div>
            </div>
        )
    }
}