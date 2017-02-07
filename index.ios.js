import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './App/Components/App';

export default class CWeather extends Component {
  render() {
    return (<App/>);
  }
}

AppRegistry.registerComponent('CWeather', () => CWeather);