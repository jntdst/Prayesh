import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Navigator,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';



var icon=[require('../../img/scissor1.png'), require('../../img/scissor2.png'), require('../../img/scissor3.png')];
export default class Logo extends Component{
  
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
        <View 
           style={{width:Dimensions.get('window').width, height:Dimensions.get('window').height*1/10, backgroundColor:'#ababab', justifyContent: 'center', alignItems: 'center'}}
        >
             
            <Image 
             source={icon[this.props.iconNum]} 
             style={{width:'12%', height:'67%'}}
            >
            </Image>
        </View>
    );
  }
}