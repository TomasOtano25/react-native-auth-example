import React, { Component } from 'react';
import firebase from 'react-native-firebase';

import LogIn from './screens/LogIn';

export default class App extends Component {
  componentWillMount() {
  }

  render() {
    return (
      <LogIn />
    );
  }
}
