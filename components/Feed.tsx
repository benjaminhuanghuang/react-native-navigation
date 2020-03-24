import React, { Component } from "react";
import { View, Text, Button, Platform, TouchableOpacity } from "react-native";

import { styles } from "../styles";

interface FeedProps {
  navigation: any
}
const Feed: React.SFC<FeedProps> = (props): JSX.Element => {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Feed</Text>
      <Button title="Go to" onPress={() => {props.navigation.navigate('Detail')}}></Button>
    </View>
  );
};

export default Feed;
