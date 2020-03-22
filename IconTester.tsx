import React from "react";
import { StyleSheet, Text, View } from "react-native";

//
import { Ionicons } from '@expo/vector-icons';
//
import {styles} from "./styles"

// Icon.loadFont();

export default function IconTester() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>"Test"</Text>
      <Ionicons
       name="md-checkmark-circle" size={32} color="green"
      />
    </View>
  );
}
