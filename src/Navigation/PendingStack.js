import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PendingChat from '../Screen/PendingChat';

const Stack = createStackNavigator();

const PendingStack = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PendingChat" component={PendingChat} />
    </Stack.Navigator>
  );
};

export default PendingStack;
