import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//
import Screen1 from "./screens/drawers/Screen1";
import Screen2 from "./screens/drawers/Screen2";
import Screen3 from "./screens/drawers/Screen3";


import Feed from "./screens/Feed";

const Stack = createStackNavigator();

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      {/* <Stack.Screen name="Feed" component={Feed} /> */}
      <Stack.Screen name="Contacts" component={Screen1} />
      <Stack.Screen name="Favorites" component={Screen2} />
      <Stack.Screen name="Settings" component={Screen3} />
    </Stack.Navigator>
  );

  render() {
    return <NavigationContainer>{this.createHomeStack()}</NavigationContainer>;
  }
}
