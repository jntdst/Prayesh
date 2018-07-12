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

import { TabNavigator } from 'react-navigation';
import SignUpBody from '../SignUpBody/SignUpBody'
import Logo from '../Logo/Logo'

/*export default class SignUpLogin extends Component{
    render() {
        return (
       <View>
         <SignUpBody/>
       </View>
   );
 }
}*/

export default TabNavigator({
    SignUpBody: { screen: SignUpBody },
    Logo: { screen: Logo },
});