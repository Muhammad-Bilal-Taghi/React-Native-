import {FlatList, Text , StyleSheet} from 'react-native'
import React from 'react'
// import { FlatList } from 'react-native-web'

const  Flatlistdemo = () => {
    const names = [
        {
          index: "1",
           name: "Bilal",
    },
    {
        index: "2",
        name: "Junaid",
 },
 {
    index: "3",
    name: "Shibly",
},
{
    index: "4",
    name: "Habiba",
},
{
    index: "5",
    name: "Shibly",
}


]
    return (
      <FlatList 
      style={styles.listStyle}
       keyExtractor={(key)=>{
           return key.index;
       }}
    //    horizontal
       numColumns={2}
       showsHorizontalScrollIndicator={false}
      data={names} 
      renderItem={({item})=>{
          return( 
          <Text style={styles.textStyle}>{item.name}</Text> 
          ) 
    }}
    />
   );
  };

  const styles = StyleSheet.create({
      textStyle: {
          fontSize:22,
          padding: 30,
          backgroundColor: "blue",
          margin: 20,
          color: "white"
      },
      listStyle: {
          textAlign: 'center',
          margin: 20,
          padding: 10,   
    }
  })

export default Flatlistdemo