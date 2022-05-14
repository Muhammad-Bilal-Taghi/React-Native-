import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CustomComponent = () => {
   return(
      <Text style={styles.textStyle}>Muhammad Bilal Taghi
    This is my custom component 😇  </Text>
   )
    }

const styles = StyleSheet.create({
   textStyle : {
     color: "red",
     textAlign: "center",
     marginTop: 50,
   },
})
export default CustomComponent;
