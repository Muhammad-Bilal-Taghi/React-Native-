import React from 'react'
import { View, Text , StyleSheet } from 'react-native'


const FirstChallenge = () => {
   const yourname = "Muhammad BIlal Taghi";
    return (
      <View>
        <Text style= {styles.textStyleone}>
            Welcome to Eastern Garments

        </Text>
        <Text style= {styles.textStyleone}>We love React Native!</Text>
        <Text>Hi, My Name is {yourname}</Text>
      </View>

    
  )


}

const styles = StyleSheet.create({
    textStyleone : {
        fontSize: 40,
        color: 'red',
        fontWeight: 'bold'
    },
    textStyletwo : {
        fontSize: 30,
        color: 'blue',
        fontWeight: 'bold'
    }
})

export default FirstChallenge