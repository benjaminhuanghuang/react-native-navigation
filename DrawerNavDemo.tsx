import react, {Component} from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//
import Screen1 from './screens/drawers/Screen1'
import Screen2 from './screens/drawers/Screen2'
import Screen3 from './screens/drawers/Screen3'

Icon.loadFont()

const Drawer = createDrawerNavigator();


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component=""/>
          <Drawer.Screen name="Contacts" component={Screen1}/>
          <Drawer.Screen name="Faorites" component={Screen2}/>
          <Drawer.Screen name="Home" component={Screen3}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}