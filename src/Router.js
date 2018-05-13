import React,{Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {View} from 'react-native';
import Home from './components/Home';
import Library from './components/Library';
import LoginForm from './components/LoginForm';
import CreateAccount from './components/CreateAccount';
import Login2 from './components/Login2';

console.disableYellowBox = true;

const Router = StackNavigator({
    LoginForm: {screen : LoginForm},
    CreateAccount: {screen : CreateAccount},
    Login2: {screen : Login2},
    Home: {screen : Home},
    Library: {screen: Library},
});

export default Router;




