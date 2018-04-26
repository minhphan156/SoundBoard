import React, { Component } from 'react';
import {View} from 'react-native';
import Home from './components/Home';
import Router from './Router';

export default class App extends Component {
  render() {
    return (
      <Router/>
    );
  }
}

