import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PostChat from '../Screen/ChatPage';

const Stack = createStackNavigator();

const PostStack = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PostChat" component={PostChat} />
    </Stack.Navigator>
  );
};

export default PostStack;
