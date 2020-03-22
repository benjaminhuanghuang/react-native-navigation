import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//
import DrawerNavDemo from './DrawerNavDemo'
import TabNavDemo from './TabNavDemo'
import StackNavDemo from './StackNavDemo'
import CombineNavDemo from './CombineNavDemo'

export default class App extends React.Component {
  render() {
    return (
      <CombineNavDemo/>
    );
  }
}
