import React, { Component } from 'react';
import { View } from 'react-native';

import { Header } from '../components/common';
import LoginForm from '../components/forms/LoginForm';

class Home extends Component {
  render() {
    return (
      <View>
      <Header>Authentication</Header>
      <LoginForm />
     </View>
    );
  }
}   

export default Home;
