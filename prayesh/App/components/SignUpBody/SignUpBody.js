import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  Button,
  TouchableOpacity
} from 'react-native';
import Logo from '../Logo/Logo'
TextInput.defaultProps.selectionColor = '#000000';
TextInput.defaultProps.underlineColorAndroid = '#000000';


var icon=[require('../../img/scissor1.png'), require('../../img/scissor2.png'), require('../../img/scissor3.png')];
export default class SignUpBody extends Component{
    constructor(props) {
        super(props);
        this.state = {imgState: 1};
      }
      changeLogo = ()=> {
        this.setState(previousState => {
          return { imgState: (previousState.imgState + 1) % 3 };
        });
      }
    
  render() {
    return (
        <View>
            <Logo iconNum={this.state.imgState}/>
            
            <View
                style={{width: Dimensions.get('window').width, height:Dimensions.get('window').height*8/10}}
            >
                <View style={styles.inputs}>
                    <TextInput onChangeText={this.props.textChange} placeholder="Name" style={styles.textInput} onChangeText={this.changeLogo} >
                    </TextInput>
                    <TextInput onChangeText={this.props.textChange} placeholder="Family" style={styles.textInput} onChangeText={this.changeLogo} >
                    </TextInput>    
                    <TextInput onChangeText={this.props.textChange} placeholder="Email" style={styles.textInput} onChangeText={this.changeLogo} >
                    </TextInput>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{justifyContent: 'center',alignItems: 'center', paddingTop:'2%'}}>
                        <Text>Forget Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width: '100%', height: '65%', alignItems:'center', justifyContent:'center', backgroundColor:'#ababab'}}>
                    <ImageBackground
                        style={{width: '90%', height: '100%', alignItems:'center', backgroundColor:'#ababab'}}
                        source={require('../../img/background2.jpg')}
                    >
                    </ImageBackground>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    inputs:{
        width: '100%', 
        height: '45%', 
        alignItems:'center',
        backgroundColor:'#ababab'
    },
    textInput:{
        height:'20%',
        width:'90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        backgroundColor:'#000000',
        width:'90%',
        height:'24%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
    },
    buttonText:{
        color:'#ffffff',
    },
  });