import React ,{Component } from 'react'
import {Link} from 'react-router-dom'
var artlist = [
    {
        artnum:'1',
        artname:'老北京的传说：太和殿的龙没法儿数',
        artimg:'images/dguaishou3.png'
    },
    {
        artnum:'2',
        artname:'老北京的传说：太和殿的龙没法儿数',
        artimg:'images/dguaishou3.png'
    },
    {
        artnum:'3',
        artname:'老北京的传说：太和殿的龙没法儿数',
        artimg:'images/dguaishou3.png'
    },
    {
        artnum:'4',
        artname:'老北京的传说：太和殿的龙没法儿数',
        artimg:'images/dguaishou3.png'
    },
    {
        artnum:'5',
        artname:'老北京的传说：太和殿的龙没法儿数',
        artimg:'images/dguaishou3.png'
    }
]
export default class Taihe extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        fetch('/artlist')
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            this.setState({
                data:res
            })
        })
    }
    backClick(){
    //    window.history.go(-1)
   }
    render(){
        return(
            <div className='tuisong'>
                <div className='gghead'>
                    <Link to='/tab'>
                    <span style={{float:'left',marginLeft:'3%',marginBottom:'10%',fontSize:'28px'}} onTouchStart={this.backClick}>
                        <img src={require('../images/dfanhui2.png')}/>
                    </span>
                    </Link>
                     <span style={{fontSize:'24px',float:'left',marginLeft:'28%'}}>文章推送</span>
                </div>
                <div className='thimg'>
                    {
                        this.state.data.map((item)=>(
                            
                    <div className="push">
                        <Link to={'/home/tuisong1/'+item.title}>     
                        <div className='holeft'>
                            <p style={{color:'black'}}>{item.title}</p>
                        </div>
                        <img src={item.photo['picname']} alt='' className='horight'/>
                        </Link>
                    </div>
                        
                        ))
                    }
                    {/* {
                        artlist.map((item)=>(
                            
                    <div className="push">
                        <Link to={'/home/tuisong1/'+item.artnum}>     
                        <div className='holeft'>
                            <p>{item.artname}</p>
                        </div>
                        <img src={require('../'+item.artimg+'')} alt='' className='horight'/>
                        </Link>
                    </div>
                        
                        ))
                    } */}
                </div>
            </div>
        )
    }
}