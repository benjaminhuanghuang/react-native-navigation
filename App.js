import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 
import AppStackNavigator from './AppStackNavigator'
import AppSwitchNavigator from './AppSwitchNavigator'

export default class App extends React.Component {
  render() {
    // return <AppStackNavigator />;
    return <AppSwitchNavigator />;
  }
}
