import React, { Component} from 'react';
import { View, Text, Button, Platform, TouchableOpacity } from 'react-native';

import { styles } from '../styles';


interface DetailsProps {

}
const Details :React.SFC<DetailsProps> = ():  JSX.Element =>{
  return (
    <View style={styles.screenContainer}>
      <Text style = {styles.title}>Detail Screen</Text>
      <Button title="Go to" onPress={()=>{}}></Button>
    </View>
  )
}


export default ComponentTemplate;