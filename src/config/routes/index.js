import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Home, NewsDetail } from '../../containers/pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none" >
        <Stack.Screen name="Home" component={Home} headerMode="none" />
        <Stack.Screen name="NewsDetail" component={NewsDetail} headerMode="none" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;