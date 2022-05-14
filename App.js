import React from 'react';
import { View } from 'react-native';
import OurButton from './src/screens/OurButton';
// import CustomComponent from './src/screens/CustomComponent';
// import FirstChallenge from './src/screens/FirstChallenge';
// import Flatlistdemo from './src/screens/Flatlistdemo';
import ImageFile from './src/screens/Images';
//  Create a Component that return some jsx / simple function
const App = () => {
   return(
       <View>
      {/* <Text style={styles.textStyle}>Muhammad Bilal Taghi! App.js</Text>
       <CustomComponent/>
       <FirstChallenge/> */}
       {/* <Flatlistdemo/> */}
       <ImageFile/>
       <OurButton/>
       </View>
      )
    }

// const styles = StyleSheet.create({
//    textStyle : {
//      color: "red",
//      textAlign: "center",
//      marginTop: 200,
//    },
// })
export default App
