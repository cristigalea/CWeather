//Component that displays the default screen
import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Alert, 
  Image,
  StyleSheet
} from 'react-native';

import * as api from '../Utils/api';

import { 
  DEFAULT_COLOR, 
  HIGHLIGHT_COLOR, 
  HIGHLIGHT_COLOR_DARK,
  COLD_COLOR
} from '../config';

import Weather from './Weather';
import Toggler from './Toggler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: DEFAULT_COLOR
  },

  logo: {
    height: 50,
    width: 250,
    marginTop: 50,
    marginBottom: 45,
    alignSelf: 'center'
  },

  label: {
    fontSize: 20,
    marginBottom: 20,
    alignSelf: 'center'
  },

  searchBox: {
    height: 50,
    padding: 4,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#6B96A1',
    backgroundColor: 'white',
    borderRadius: 8,
    textAlign: 'center',
    color: HIGHLIGHT_COLOR_DARK
  },

  button: {
    marginTop: 30,
    height: 50,
    padding: 4,
    backgroundColor: HIGHLIGHT_COLOR,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: HIGHLIGHT_COLOR_DARK,
    alignSelf: 'center',
    flexDirection: 'row'
  },

  buttonText: {
    fontSize: 20,
    alignSelf: 'center',
    color: HIGHLIGHT_COLOR_DARK 
  }
});

export default class Search extends Component {

  state = {
    city: '',
    isMetric: true
  }

  handleSearch = (event) => {
    this.setState({ city: event.nativeEvent.text || '' });
  }

  handleSubmit = () => {
    if (!this.state.city) {
      Alert.alert('Please provide a city name!');
    } else {
      // Perf.start();
      api.getWeatherByCityName(this.state.city, this.state.isMetric)
        .then((data) => { 
          // Perf.stop();
          // console.log('the request took ' + Perf.getLastMeasurements() + ' milliseconds');
          console.log('data was ', data);
          if (data.cod == '200') {
            this.props.navigator.push({
              title: 'Weather',
              component: Weather,
              passProps: { weatherData: data, isMetric: this.state.isMetric }
            });
          } else {
            Alert.alert('Invalid City name!'); 
          }
          
          this.setState({ city: '' });
        })
        .catch((error) => {
          console.log('error: ', error);
          this.setState({ city: '' });
          Alert.alert('There was an error while fetching the weather');
        });
      }
  }

  handleToggleMetric = (value) => {
    this.setState({ isMetric: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          style={styles.logo} 
          source={require('../../images/logo.png')} />

        <TextInput 
          style={styles.searchBox} 
          value={this.state.city}
          placeholder="Enter a city name"
          onChange={this.handleSearch} />

        <TouchableOpacity
          onPress={this.handleSubmit}
          style={styles.button}>
           <Text style={styles.buttonText}>Get Weather</Text>
        </TouchableOpacity>

        <Toggler 
          text="Metric"
          altText="Imperial"
          isSelected={this.state.isMetric}
          handleToggleMetric={this.handleToggleMetric} />
      </View>
    )
  }
}