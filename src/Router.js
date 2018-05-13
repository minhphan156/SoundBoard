import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {View} from 'react-native';
import Home from './components/Home';
import Library from './components/Library';
import Search from './components/Search';
import LoginForm from './components/LoginForm';
import CreateAccount from './components/CreateAccount';

console.disableYellowBox = true;

const Router = StackNavigator({
    LoginForm: {screen : LoginForm},
    CreateAccount: {screen : CreateAccount},
    Home: {screen : Home},
    Library: {screen: Library},
    //Search: {screen: Search}
});

export default Router;




