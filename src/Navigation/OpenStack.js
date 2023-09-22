import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import ChatPage from '../Screen/ChatPage';
import OpenChat from '../Screen/OpenChat';

const Stack = createStackNavigator();

const OpenStack = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChatPage"
        component={OpenChat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default OpenStack;
