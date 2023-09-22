import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatPage from '../Screen/ChatPage';
import LoginPage from '../Screen/Login';
import MainNavigator from './MainNavigation';

const stack = createStackNavigator();

const Navigations = props => {
  return (
    <stack.Navigator initialRouteName="Login">
      <stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false, title: 'Login'}}
      />
      <stack.Screen
        name="ChatBot"
        component={MainNavigator}
        options={{
          headerShown: false,
          title: 'Chat bot',
          headerStyle: {backgroundColor: 'white', borderBottomWidth: 1},
        }}
      />
    </stack.Navigator>
  );
};

export default Navigations;
