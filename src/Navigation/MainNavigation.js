import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text} from 'react-native';

// import Navigations from './AppNavigation';
// import OpenChat from '../Screen/OpenChat';
// import PendingChat from '../Screen/PendingChat';
// import PostChat from '../Screen/PostChat';
import OpenStack from './OpenStack';
import PendingStack from './PendingStack';
import PostStack from './PostStack';

const Tab = createBottomTabNavigator();

const MainNavigator = props => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'OpenChatTab') {
            iconName = focused ? 'comment' : 'comment';
          } else if (route.name === 'PendingChatTab') {
            iconName = focused ? 'id-card' : 'id-card';
          } else if (route.name === 'PostChatTab') {
            iconName = focused ? 'ellipsis-h' : 'ellipsis-h';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({focused, color}) => {
          let label;
          console.log(focused);
          if (route.name === 'OpenChatTab') {
            label = 'Open';
          } else if (route.name === 'PendingChatTab') {
            label = 'Pending';
          } else if (route.name === 'PostChatTab') {
            label = 'Post';
          }

          return <Text style={{color}}>{label}</Text>; // Menyembunyikan label saat tab tidak aktif
        },
        activeTintColor: 'blue', // Warna teks tab aktif
        inactiveTintColor: '#D5D4D3', // Warna teks tab tidak aktif
        labelPosition: 'below-icon', // Letak label di bawah ikon
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="OpenChatTab"
        component={OpenStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="PendingChatTab"
        component={PendingStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="PostChatTab"
        component={PostStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MainNavigator;
