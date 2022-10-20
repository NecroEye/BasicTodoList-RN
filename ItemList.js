import React from 'react';
import {View, Text, StyleSheet} from "react-native";


const ItemList = ({item}) =>{

  return(

    <View style={style.card}>
    <Text>{item}</Text>
    </View>

  )
}
export default ItemList;

const style = StyleSheet.create({

  card: {padding:10, backgroundColor:"gray",margin:5},


});
