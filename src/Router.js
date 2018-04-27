import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {View} from 'react-native';
import Home from './components/Home';
import Playing from './components/Playing';
import Library from './components/Library';
import Search from './components/Search';

const Router = StackNavigator({
    Home: {screen : Home},
    Playing: {screen: Playing},
    Library: {screen: Library},
    Search: {screen: Search}
});

export default Router;




