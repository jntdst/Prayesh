export const RootStack = StackNavigator({
    LoginPage : {
      screen: LoginBody,
      navigationOptions: {
        header: null,
      }
    },
    SignUpPage : {
      screen: SignUpBody,
      navigationOptions: {
        header: null,
      }
      
    }, 
  }, {initialRouteName: 'SignUpPage',})