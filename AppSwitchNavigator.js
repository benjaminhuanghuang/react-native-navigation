import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {
    createStackNavigator,
    createSwitchNavigator,
    createBottomTabNavigator
} from "react-navigation";
//
import ScreenComponentOne from './ScreenComponentOne';
import ScreenComponentTwo from './ScreenComponentTwo';
import ScreenComponentThree from './ScreenComponentThree';


export default AppSwitchNavigator = createSwitchNavigator({
    routeNameOne: ScreenComponentOne,
    routeNameTwo: ScreenComponentTwo,
});