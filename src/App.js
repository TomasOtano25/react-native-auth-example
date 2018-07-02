import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase';

import LogIn from './screens/LogIn';
import Home from './screens/Home';
import { Spinner } from './components/common';

export default class App extends Component {
  constructor() {
    super();
    this.state = { loggedIn: null };
    this.unsubscriber = null;
  }

  componentWillMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => {
      if (user) return this.setState({ loggedIn: true });
      this.setState({ loggedIn: false });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
          return <Home />; 
      case false: 
          return <LogIn />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return this.renderContent();
  }
}
