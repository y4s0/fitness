/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import RootNavigator from './nevigaton/RootNavigator';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />  
    </Provider>
  );
}