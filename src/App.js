import React, { Component } from 'react';
import {View} from 'react-native';
import Home from './components/Home';
import Router from './Router';

import ReduxThunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

import { Provider } from "react-redux";

export default class App extends Component {
  
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
      <Router/>

</Provider>

    );
  }
}

