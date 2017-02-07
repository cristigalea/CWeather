import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import Search from './Search';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default () => {
  return (
    <NavigatorIOS 
      style={styles.container}
      initialRoute={{
        title: 'Search',
        component: Search
      }} />
  )
}