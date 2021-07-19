import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import screens
import FitnessDataView from '../screens/FitnessDataView';

const Stack = createStackNavigator();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};
const RootNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
         <Stack.Screen name="Home" component={FitnessDataView} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootNavigator;