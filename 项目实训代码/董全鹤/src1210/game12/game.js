import html from '../game/Html'; 
import React,{Component } from 'react'
import {withRouter} from 'react-router-dom' //引入withRouter
class Data extends Component {
  render() {
    return (
      <iframe
        title="resg"
        srcDoc={html}
        style={{ width: '100%', border: '0px', height: '1100px' }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        scrolling="auto"
      />
    );
  }
}
 
export default withRouter(Data);