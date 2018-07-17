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
  TouchableOpacity,
  //Navigator
} from 'react-native';
import { TabNavigator } from 'react-navigation'
import { createStackNavigator,StackNavigator, withNavigation} from 'react-navigation'
import LoginBody from '../LoginBody/LoginBody'
import SignUpBody from '../SignUpBody/SignUpBody'

st = [[0,1],[1,0]];
BackGroundcolors= ['#000000', '#ababab'];
textColors= ['#000000','#ffffff'];


class SignUpLoginTab extends Component{
  constructor(props) {
    super(props);
  }
  
  clickOnSignUp = ()=>{
    console.log("salam");
    this.props.navigation.navigate('SignUpPage');
  }
  clickOnLogin = ()=>{
    this.props.navigation.navigate('LoginPage');
  }

    render() {
        return (
       <View style={{width: Dimensions.get('window').width, height:Dimensions.get('window').height*1/20}}>
         <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={this.clickOnSignUp} style={[styles.Login ,{backgroundColor:  BackGroundcolors[st[this.props.pageNum][0]]}]}>
              <Text style={{color:textColors[st[this.props.pageNum][1]]}}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.clickOnLogin} style={[styles.SignUp,{backgroundColor: BackGroundcolors[st[this.props.pageNum][1]]}]}>
              <Text style={{color:textColors[st[this.props.pageNum][0]]}}>Login</Text>
            </TouchableOpacity>
         </View>
       </View>
   );
 }
}
export default withNavigation(SignUpLoginTab);
const styles = StyleSheet.create({
    ButtonContainer:{
      flex:1,
      flexDirection:'row',
    },
    Login:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10,
      marginLeft:'1%',
      marginRight:'1%',
    },
    SignUp:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center', 
      borderRadius:10,
      marginLeft:'1%',
      marginRight:'1%',
      //#padding:'2%'
    }
  });

