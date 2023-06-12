import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChoosenEvents = ({type}) => {
  return (
    <View>
      <Text style={{
        color:type=="Like" ? "#17B169" : "#F6006B",
        fontSize:40,
        fontWeight:"600",
        borderWidth:4,
        paddingLeft:10,
        paddingRight:10,
        borderColor:type=="Like" ? "#17B169" : "#F6006B",
        borderRadius:7.5
        
        }}>{type}</Text>
    </View>
  )
}

export default ChoosenEvents

const styles = StyleSheet.create({})