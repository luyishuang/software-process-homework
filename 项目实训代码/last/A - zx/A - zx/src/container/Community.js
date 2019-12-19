import React ,{Component} from 'react'
import {Link} from 'react-router-dom'
import{TabBar,SearchBar} from 'antd-mobile'

export default class Community extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch("/dt/list")
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            // var newlist = [...res.message.reverse()];
            // console.log(newlist)
            this.setState({
                data:res.message

            },()=>{
                console.log(this.state.data);
            })
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.data==this.state.data){
        console.log(prevState.data==this.state.data)

            fetch("/dt/list")
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                // var newlist = [...res.message.reverse()];
                this.setState({
                    data:res.message
                },()=>{
                    console.log(this.state.data);
                    console.log( typeof(this.state.data[0].createtime));
                })
            })
        }
    }

    render(){
        return(
            <div className='lout'>
                <div className='title'> 
                    <div style={{fontSize:'22px' ,float:'left',width:"30%",marginTop:'4%',marginLeft:'40%'}}>
                        <a>社区</a>
                    </div>
                    <Link to='/community/topic'><img src={require('../images/djiahao.png')}style={{width:'10%', float:'right',marginRight:'5%',marginTop:'3%'}} /></Link>
                </div>
                <div style={{marginTop:'17%'}} ></div>

                
                        {
                            this.state.data.map((item,idx)=>{
                                // var introduce = item.content.splice(0,10);

                                return <Link to={{pathname:'/community/detail',state:item}}>
                                    <div className='topic'  >
                                <li key={idx} >
                                    <div className='cotop'>
                                       <img src={item.imgpath}/>
                                        <span className='coname'>{item.username}</span>
                                        {/* <span className='codown'>{item.content}</span> */}

                                        <span className='cotime'>{item.createtime}</span>
                                    </div>
                                    <div className='codown'>
                                        <p>{item.content}</p>
                                    </div>
                                </li>
                                </div>
                                </Link>
                            }
                                
                            )
                        }
            </div>
        )
    }
}