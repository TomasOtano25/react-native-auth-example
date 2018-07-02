import React, { Component } from 'react';
import { Alert, Text } from 'react-native';
import firebase from 'react-native-firebase';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin'

import { Card, CardSection, Button, Input, Spinner } from '../common';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    //this.onButtonPress = this.onButtonPress.bind(this);
  }
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    try {
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(this.onLoginFail.bind(this));
      });
    } catch (e) {
      this.onLoginFail.bind(this);
      console.log(e);
    }
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed',
      loading: false
    });
  }

  onLoginSuccess() {
    this.setState({ 
      email: '',
      password: '', 
      error: '', 
      loading: false
    });
  }

  handleOnChange(text) {
    this.setState({ email: text });
  }

  async handleGoogleSigin() {
    try {
      await GoogleSignin.configure();

      const data = await GoogleSignin.signIn();

      Alert.alert(data);
    } catch (e) {
      console.log(e);
    }
  }

  renderButton() {
    return this.state.loading ? <Spinner size='small' /> : 
      <Button onPress={this.onButtonPress.bind(this)}> Log In </Button>;
  }

  render() {
    return (
      <Card>
          <CardSection>
            <Input 
              value={this.state.email}
              onChangeText={/*this.handleOnChange*/ email => this.setState({ email })}
              label='Email'
              autoCorrect={false}
              placeholder='user@gmail.com'
            />
              {/*<TextInput
                value={this.state.text}
                onChangeText={(text) => this.setState({ text })}  
                style={{ width: null, height: 40, flex: 1}}
              />*/}
          </CardSection>
          <CardSection>
          <Input 
              value={this.state.password}
              onChangeText={/*this.handleOnChange*/ password => this.setState({ password })}
              label='Password'
              autoCorrect={false}
              placeholder='password'
              secureTextEntry
          />
          </CardSection>

            <Text style={styles.errorTextStyles}>
              {this.state.error}
            </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>

          <CardSection>
            <GoogleSigninButton
              style={{ width: null, height: 48, flex: 1 }}
              size={GoogleSigninButton.Size.Icon}
              color={GoogleSigninButton.Color.Dark}
              onPress={this.handleGoogleSigin} 
            />
          </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyles: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};
