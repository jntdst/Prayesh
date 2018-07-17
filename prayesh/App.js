/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Navigator
} from 'react-native';
import Logo from './App/components/Logo/Logo'
import SignUpBody from './App/components/SignUpBody/SignUpBody'
import SignUpLoginTab from './App/components/SignUpLoginTab/SignUpLoginTab'
import LoginBody from './App/components/LoginBody/LoginBody';
import { createStackNavigator, StackNavigator } from 'react-navigation'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);
console.disableYellowBox = true;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
/*
const RootStack = createStackNavigator(
  {
    LoginPage: LoginBody,
    
    SignUpPage: SignUpBody,
    
    SignUpLoginTabPage: SignUpLoginTab,
    
  },
  {
    initialRouteName: 'SignUpPage',
  }
);
*/
const RootStack = StackNavigator({
  Screen1 : {
    screen: Screen1,
    navigationOptions: {
      header: null,
    }
  },
  Home : {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerStyle: styles.headerStyle,
      headerTitle: <Text>Home</Text>,
      headerLeft : null,
      headerRight: null,
    })
  }, 
}, {headerMode: 'screen'})
export default class App extends React.Component {
  
  render() {
    return <RootStack/>;
  }
}
/*export default class App extends Component {
  
  

  render() {
         return (
        <View>
          <LoginBody/>
        </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
