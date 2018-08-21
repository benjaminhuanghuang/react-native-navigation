import React from 'react';
import { Button, View } from 'react-native';

export default class ScreenComponentOne extends React.Component {
    static navigationOptions = {
        title: 'First screen',
      };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    borderWidth: 25,
                    borderColor: 'teal',
                }}>
                <Button
                    title="Go to two"
                    onPress={() => this.props.navigation.navigate('routeNameTwo')}
                />
            </View>
        );
    }
}