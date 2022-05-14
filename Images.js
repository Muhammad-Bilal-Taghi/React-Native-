import React from 'react'
import { Text, View, StyleSheet , Image} from 'react-native'

const ImageFile = () => {

    return (
      <View style={styles.listStyle}>
        <Text style={styles.textStyle} >This is image File</Text>
         <Image style={styles.imageStyle} source={require('../../assets/pixel1.jpg')}/>
      </View >
      
    )
  }

  const styles = StyleSheet.create({
    textStyle: {
        fontSize:40,
    },
    imageStyle : {
      width: 300,
      height: 300,
    }
  })
export default ImageFile