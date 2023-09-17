import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ChatPage from '../Screen/ChatPage';
import LoginPage from '../Screen/Login';

const stack = createStackNavigator();

const Navigations = props => {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Login"
        component={LoginPage}
        options={{headerShown: false, title: 'Login'}}
      />
      <stack.Screen
        name="ChatBot"
        component={ChatPage}
        options={{
          headerShown: true,
          title: 'Chat bot',
          headerStyle: {backgroundColor: 'white'},
        }}
      />
    </stack.Navigator>
  );
};

export default Navigations;
