import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

//
import DrawerNavDemo from './DrawerNavDemo'
import TabNavDemo from './TabNavDemo'
import StackNavDemo from './StackNavDemo'
import CombineNavDemo from './CombineNavDemo'


import IconTester from './IconTester'

export default class App extends Component {
  render() {
    return (
      <DrawerNavDemo/>
    );
  }
}
