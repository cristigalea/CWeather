//Component that displays the weather info

import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  Alert, 
  StyleSheet 
} from 'react-native';

import { 
  DEFAULT_COLOR, 
  HIGHLIGHT_COLOR_DARK,
  COLD_COLOR, 
  HOT_COLOR 
} from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    backgroundColor: DEFAULT_COLOR
  },

  title: {
    marginTop: 60,
    fontSize: 45,
    alignSelf: 'center',
    textAlign: 'center',
    color: HIGHLIGHT_COLOR_DARK
  },

  subtitle: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    alignSelf: 'center'
  },

  temperature: {
    fontSize: 70,
    alignSelf: 'center',
  },

  temperatureContainer: {
    flexDirection: 'row'
  },

  temperatureMin: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center',
    color: COLD_COLOR
  },

  temperatureMax: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center',
    color: HOT_COLOR
  },

  description: {
    fontSize: 25,
    marginTop: 20,
    fontStyle: 'italic',
    alignSelf: 'center',
    color: HIGHLIGHT_COLOR_DARK
  }
});

const Weather = (props) => {

  const tempUnit = props.isMetric ? 'C' : 'F';
  const timeInfo = (new Date()).toLocaleString('en-GB',  { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.weatherData.name}, {props.weatherData.sys.country}</Text>
      <Text style={styles.subtitle}>{timeInfo}</Text>
      <Text style={styles.temperature}>{parseInt(props.weatherData.main.temp, 10)}&deg;{tempUnit}</Text>
      <View style={styles.temperatureContainer}>
        <Text style={styles.temperatureMin}>{parseInt(props.weatherData.main.temp_min, 10)}&deg;{tempUnit}</Text>
        <Text style={styles.temperatureMax}>{parseInt(props.weatherData.main.temp_max, 10)}&deg;{tempUnit}</Text>
      </View>
      <Text style={styles.description}>{props.weatherData.weather[0].description}</Text>
    </View>
  )
}

Weather.propTypes = {
  weatherData: React.PropTypes.object.isRequired
};

export default Weather;