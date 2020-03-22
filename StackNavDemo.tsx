import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();;

export default class App extends Component {

  createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        children={this.createDrawer}
        options={{
          title: "My Feed",
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detail Screen",
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "white"
        }}
      />
      <Stack.Screen name="Bottom Tabs" children={this.createBottomTabs} />
      <Stack.Screen name="Top Tabs" children={this.createTopTabs} />
    </Stack.Navigator>

  createDrawer = () =>
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Contacts" component={Screen1} />
      <Drawer.Screen name="Favorites" component={Screen2} />
      <Drawer.Screen name="Settings" component={Screen3} />
    </Drawer.Navigator>

  createTopTabs = (props) => {
    return <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="Tab 1"
        component={Tab1}
        options={{ title: props.route.params.name }}
      />
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  }

  createBottomTabs = () => {
    return <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen
        name="Tab 1"
        style={{ marginBottom: 16 }}
        component={Tab1}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'home'} />
          ),
        }}
      />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'human'} />
          )
        }}
      />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: () => (
            <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
          ),
        }}
      />
    </MaterialBottomTabs.Navigator>
  }

  render() {
    return (
      <NavigationContainer>
        {this.createHomeStack()}
      </NavigationContainer>
    );
  }
}