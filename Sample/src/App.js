/**
 * MIT License
 *
 * Copyright (c) 2017 Douglas Nassif Roma Junior
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, {Component} from 'react';
import {
  Alert,
  AppRegistry,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Dialog,
  ProgressDialog,
  ConfirmDialog,
} from 'react-native-simple-dialogs';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 25,
    textAlign: 'center',
  },
  instructionsText: {
    color: '#333333',
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default class App extends Component {
  state = {};

  openDialog = show => {
    this.setState({showDialog: show});
  };

  openConfirm = show => {
    this.setState({showConfirm: show});
  };

  openProgress = () => {
    this.setState({showProgress: true});

    setTimeout(() => {
      this.setState({showProgress: false});
    }, 4000);
  };

  optionYes = () => {
    this.openConfirm(false);
    // Yes, this is a workaround :(
    // Why? See this https://github.com/facebook/react-native/issues/10471
    setTimeout(() => {
      Alert.alert('The YES Button touched!');
    }, 300);
  };

  optionNo = () => {
    this.openConfirm(false);
    // Yes, this is a workaround :(
    // Why? See this https://github.com/facebook/react-native/issues/10471
    setTimeout(() => {
      Alert.alert('The NO Button touched!');
    }, 300);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Welcome to React Native Simple Dialogs!
        </Text>
        <Text style={styles.exampleText}>Examples</Text>
        <Text style={styles.instructionsText}>
          To get started, touch on the buttons
        </Text>

        <Button onPress={() => this.openDialog(true)} title="Custom Dialog" />

        <View style={{height: 40}} />

        <Button onPress={() => this.openConfirm(true)} title="Confirm Dialog" />

        <View style={{height: 40}} />

        <Button onPress={this.openProgress} title="Progress Dialog" />

        <Dialog
          title="Custom Dialog"
          animationType="fade"
          contentStyle={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onTouchOutside={() => this.openDialog(false)}
          visible={this.state.showDialog}>
          <Image
            source={{
              uri: 'https://facebook.github.io/react-native/img/header_logo.png',
            }}
            style={{
              width: 99,
              height: 87,
              backgroundColor: 'black',
              marginTop: 10,
              resizeMode: 'contain',
            }}
          />
          <Text style={{marginVertical: 30, color: 'black'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Button
            onPress={() => this.openDialog(false)}
            style={{marginTop: 10}}
            title="CLOSE"
          />
        </Dialog>

        <ConfirmDialog
          title="Confirm Dialog"
          message="Are you sure about that?"
          onTouchOutside={() => this.openConfirm(false)}
          visible={this.state.showConfirm}
          negativeButton={{
            title: 'NO',
            onPress: this.optionNo,
            disabled: false,
            titleStyle: {
              color: 'blue',
              colorDisabled: 'aqua',
            },
            style: {
              backgroundColor: 'transparent',
              backgroundColorDisabled: 'transparent',
            },
          }}
          positiveButton={{
            title: 'YES',
            onPress: this.optionYes,
          }}
        />

        <ProgressDialog
          title="Progress Dialog"
          activityIndicatorColor="blue"
          activityIndicatorSize="large"
          animationType="slide"
          message="Please, wait..."
          visible={this.state.showProgress}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Sample', () => App);
