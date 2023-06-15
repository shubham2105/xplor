import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const YourPicks = () => {
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../assets/Background.jpg')}>
      <Text style={{color:"white"}}>YourPicks</Text>
    </ImageBackground>
  )
}

export default YourPicks

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})