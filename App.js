/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import EmojiPage from './src/EmojiPage';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MainPage from './src/MainPage';

const App: () => Node = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Assignment 1'} component={EmojiPage} />
        <Tab.Screen name={'Assignment 3'} component={MainPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
