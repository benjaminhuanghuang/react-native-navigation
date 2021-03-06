import React, { Component} from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';

import { styles } from '../styles';


interface ComponentTemplateProps {

}
const ComponentTemplate :React.SFC<ComponentTemplateProps> = ():  JSX.Element =>{
  return (
    <View style={styles.screenContainer}>
      <Text style = {styles.title}>Feed</Text>
      <Button title="Go to" onPress={()=>{}}></Button>
    </View>
  )
}


export default ComponentTemplate;