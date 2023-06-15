import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ExplorePlaces = () => {
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../assets/Background.jpg')}>
      <SafeAreaView>
        <Text style={{color:"white"}}>
        ExplorePlaces
        </Text>
        </SafeAreaView>
    </ImageBackground>
  )
}

export default ExplorePlaces

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})