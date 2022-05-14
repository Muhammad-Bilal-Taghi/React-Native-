import React from 'react';
import { View, StyleSheet , Text, Button } from 'react-native';


const OurButton = () => {
   return(
       <View>
         <Text style={styles.textStyle}>Buttons</Text>   
         <Button title="JOin me"
         onPress={()=>{
             console.log('Subscribe to thapa technical')
         }}
         />       
       </View>
      )
    }

const styles = StyleSheet.create({
   textStyle : {
     color: "red",
     textAlign: "center",
     marginTop: 200,
   },
})
export default OurButton;