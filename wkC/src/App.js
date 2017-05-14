import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCrR04CZzF1GBSdnOyndxAFX3QLS6Pr0Vs",
    authDomain: "zhaject.firebaseapp.com",
    databaseURL: "https://zhaject.firebaseio.com",
    projectId: "zhaject",
    storageBucket: "zhaject.appspot.com",
    messagingSenderId: "621671373799"
    });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}


export default App;
