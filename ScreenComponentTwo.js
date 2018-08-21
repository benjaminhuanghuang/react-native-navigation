import React from 'react';
import { Button, View } from 'react-native';

export default class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    title: 'Second screen',
  };
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'orange',
        }}>
        <Button
          title="Go to one"
          onPress={() => this.props.navigation.navigate('routeNameOne')}
        />
      </View>
    );
  }
}
