import React from 'react';
import { Button, View } from 'react-native';

export default class ScreenComponentThree extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Number: ${navigation.getParam('randomNumber')}`,
    };
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 25,
          borderColor: 'purple',
        }}>
        <Text style={{ fontSize: 25 }}>
          {this.props.navigation.getParam('randomNumber')}
        </Text>
        <Button
          title="Get a new random number"
          onPress={() => {
            this.props.navigation.setParams({
              randomNumber: getRandomNumber(),
            });
          }}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}