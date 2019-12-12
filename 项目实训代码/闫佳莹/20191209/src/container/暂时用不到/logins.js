import React,{Component} from 'react'
import {
    View,
    AlertIOS,
    TouchableHighlight,
    Button,
    ActivityIndicator,
    StyleSheet,
    Alert,
    Text,
    Image,
    AppRegistry,
    TextInput,
    Dimensions,
    dismissKeyboard,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    TouchableOpacity,
    Switch
} from 'react-native'
export default class TestDemo extends Component {

constructor(props) {
      super(props)
      this.state = {
        text: '',
        psw:'',
        value:true
      }
    }

getValue(){
    this.setState(
    {
        value:!this.state.value
    }
)


}
  render() {
    return (
<TouchableWithoutFeedback onPress={require('dismissKeyboard')}>
      <View style={styles.container}>

        <View style={{width: Dimensions.get('window').width, height: 64, backgroundColor: '#eeeeee', justifyContent: 'center', paddingTop: 10}}>
          <Text style={{textAlign: 'center', fontSize: 16}}> 登录 </Text>
        </View>

        <TextInput
          ref='tf' 
          style={{height: 40, width: Dimensions.get('window').width - 30, borderColor: '#959595', borderWidth: 1, marginTop: 100, left: 15, paddingLeft: 8, fontSize: 15, borderRadius: 4}} 
          placeholder='请输入手机号'
          defaultValue='你好'
          keyboardType='numeric'
          keyboardAppearance='light'
          onChangeText={(text) => this.setState({text})}
        />

        <TextInput 
          style={{height: 40, width: Dimensions.get('window').width - 30, borderColor: '#959595', borderWidth: 1, marginTop: 20, left: 15, paddingLeft: 8, fontSize: 15, borderRadius: 4}} 
          placeholder='请输入密码'
          onChangeText={(psw) => this.setState({psw})}
        />

        <TouchableHighlight 
          style={{left: 30, marginTop: 60, height: 40, width: Dimensions.get('window').width - 60, backgroundColor: '#ff8447', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}} 
          onPress={(this.btnClick.bind(this))}
          activeOpacity={0.7}
        >
          <Text style={{color: 'white'}}> 输出用户名 </Text>
        </TouchableHighlight>

        <TouchableHighlight 
          style={{left: 30, marginTop: 60, height: 40, width: Dimensions.get('window').width - 60, backgroundColor: '#ff8447', borderRadius: 4, alignItems: 'center', justifyContent: 'center'}} 
          onPress={(this.pswClick.bind(this))}
          activeOpacity={0.7}
        >
        <Text style={{alignSelf: 'center', marginTop: 20, color: 'gray'}}>输出密码</Text>
        </TouchableHighlight>
      </View>
    </TouchableWithoutFeedback>
    );
  }

btnClick (){
  alert(this.state.text)
}

pswClick (){
  alert(this.state.psw)
}


}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txtCenter: {
    fontSize: 17,
  },

  button:{
    backgroundColor:'red'
  },
});