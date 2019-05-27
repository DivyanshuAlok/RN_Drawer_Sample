import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Picker,
  ScrollView,
  Alert
} from 'react-native'; 
import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component<Props> {
   state = {
    username: '',
    key: '',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Text>
           <Image style={styles.logo} source={require('./logo.png')} />
          </Text>        
        </View>
        <View style={styles.formContainer}>
          <View>
  
              
            <TextInput style = {styles.formElement}
               underlineColorAndroid = "transparent"
               placeholder = "username"
               autoCapitalize = "none"
               onChangeText={username =>this.setState({username})}
               value ={this.state.username}/>

            <TextInput style = {styles.formElement}
               underlineColorAndroid = "transparent"
               placeholder = "key"
               autoCapitalize = "none"
               onChangeText={key =>this.setState({key})}
               value ={this.state.key}/>

          </View> 
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity >
            <Text style={styles.button}>
             SignUp
            </Text>
          </TouchableOpacity>   
        </View>
      </View>
    );
  }
}


const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  logo:{
    zIndex: 11,

  },
  buttonsContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    fontFamily: 'gotham rounded',
    backgroundColor: '#5484ed',
    textAlign: 'center',
    fontSize: 25,
    alignItems: 'center',
    height: 45,
    width: DEVICE_WIDTH - 100,
    borderRadius: 30,
    color: 'white',
    marginBottom: 50,
    textAlignVertical: 'center',
    zIndex: 11,

  },
  formElement:{
    flexDirection: 'row',
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    height: 50,
    width: DEVICE_WIDTH - 60,
    borderRadius: 10,
    marginBottom: 5,
    fontSize: 20,

  },
  formContainer:{

  },
  picker:{
    width: DEVICE_WIDTH - 60,
    borderRadius: 10,
    marginBottom: 50,
  }

});
