//Component that adds a dynamic label for the native Switch

import React, {Component} from 'react';

import { 
  View, 
  Text, 
  Switch,
  StyleSheet
} from 'react-native';

import { 
  HIGHLIGHT_COLOR, 
  HIGHLIGHT_COLOR_DARK
} from '../config';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20
  },

  switch: {
    flex: 2,
  },

  switchText: {
    flex: 2,
    textAlign: 'right',
    marginRight: 5,
    fontSize: 15,
    alignSelf: 'center',
    color: HIGHLIGHT_COLOR_DARK
  }
});

const Toggler = (props) => {
  const text = props.isSelected ? props.text : props.altText;

  return (
    <View style={styles.container}>
      <Text style={styles.switchText}>{text}</Text>
      <Switch
        onValueChange={props.handleToggleMetric}
        style={styles.switch}
        value={props.isSelected}
        onTintColor={HIGHLIGHT_COLOR_DARK} />
    </View>
  )
}

Toggler.propTypes = {
  isSelected: React.PropTypes.bool, //not required. undefined is falsy
  text: React.PropTypes.string, //not required. undefined is displayed as empty string
  altText: React.PropTypes.string, //not required. undefined is displayed as empty string
  handleToggleMetric: React.PropTypes.func.isRequired
};

export default Toggler;