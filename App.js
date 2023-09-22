/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';

// import AppContainer from './src/navigator/AppNavigator';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Navigations from './src/Navigation/AppNavigation';
import MainNavigator from './src/Navigation/MainNavigation';

// import store from './src/state/Store';
// import { Provider } from 'react-redux';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(255,255,255)',
      background: 'white',
    },
  };

  return (
    // <Provider store={store}>
    <NavigationContainer theme={MyTheme}>
      {/* <SafeAreaView style={backgroundStyle}> */}
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      {/* <AppContainer /> */}
      <Navigations />
      {/* <MainNavigator /> */}
    </NavigationContainer>
    // </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
