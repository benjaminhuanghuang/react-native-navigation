# React Native Navigation Study Project

## Refercne
- Navigation - Lecture 6 - CS50's Mobile App Development with React Native



## Setup
```
  npm install -S react-navigation
  npm install -S react-native-vector-icons
```

## Components
Navigators, routes, and screen components

- A navigator is a component that implements a navigation pattern (eg: tabs)

- Each navigator must have one or more routes.
  - A navigator is a parent of a route.
  - A route is a child of a navigator.

- Each route must have a name and a screen component.
  - The name is usually unique across the app
  - The screen component is a React component that is rendered when the route is active.
  - The screen component can also be another navigator. (Nest)


## Usage
- Create navigator

- Pass parameter to screen

- Pass parameter between router
```
this.props.navigation.navigate('RouteName', {
 paramName: 'value-of-param'
});
```
- Navigation option

- Compose navigatior
```
```