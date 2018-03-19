import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropTypes from 'prop-types';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';
import { Ionicons } from "@expo/vector-icons";
import FormPrac from './Component/FormPrac';
import Heading from './Component/Heading';
import LoginForm from './Component/LoginForm'




/*
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}
*/


//Parent Component
class ScreenOne extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Heading message={'Custom Heading for Screeen One'} />
        <Button 
          title="Go to LoginPrac"
          onPress={() => this.props.navigation.navigate('FormPrac')}
        />
        <Button 
          title="Go to LoginForm"
          onPress={() => this.props.navigation.navigate('LoginForm')}
        />
      </View>
    );
  }
}
Heading.propTypes = {
  message: PropTypes.string
}
Heading.defaultProps = {
  message: 'Heading One'
}
const ScreenStack = StackNavigator({
  ScreenOne: {screen: ScreenOne},
  FormPrac: {screen: FormPrac},
  LoginForm: {screen: LoginForm},
});

const FormPracStack = StackNavigator({
  ScreenOne: {screen: ScreenOne},
  FormPrac: {screen: FormPrac},
  LoginForm: {screen: LoginForm},
});
const LoginFormStack = StackNavigator({
  ScreenOne: {screen: ScreenOne},
  FormPrac: {screen: FormPrac},
  LoginForm: {screen: LoginForm},
})

export default TabNavigator(
  {
    Home: {screen: ScreenStack},
    FormPrac: {screen: FormPracStack},
    LoginForm: {screen: LoginFormStack},
  },
  {
    navigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor}) => {
        const {routeName} = navigation.state; 
        let iconName; 
        if(routeName === 'Home'){
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }else if(routeName === 'FormPrac'){
          iconName = `ios-options${focused ? '': '-outline'}`;
        }else if(routeName === 'LoginForm'){
          iconName = `ios-checkmark-circle${focused ? '': '-outline'}`;
        }
        
        
        // You can return any component that you like here. We usually use an icon component from react-native-vector-icons
        
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }), 
    tabBarOptions: {
      activeTintColor: 'tomato', 
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom, 
    tabBarPosition: 'bottom', 
    animationEnabled: false, 
    swipeEnable: false,

  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

