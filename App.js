import React,{Component} from 'react';
import { ScrollView, View } from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Router from './src/config/routes';


const App = () =>{
    return (
        <Router />
    );
};



export default App;
