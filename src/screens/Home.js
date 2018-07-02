import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'react-native-firebase';

import { Button } from '../components/common';

export default class Home extends Component {

  render() {
    return (
      <View>
        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
      </View>
    );
  }
}

