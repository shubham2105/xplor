import { View, Text, Image, Dimensions, StyleSheet, Animated } from 'react-native'
import React, { useCallback } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import ChoosenEvents from './ChoosenEvents';
const {height,width} =Dimensions.get('window')
const PlacesCard = ({item,isFirst,swipe,...rest}) => {
    const rotate = swipe.x.interpolate({inputRange:[-100,0,100],outputRange:['-8deg','0deg','8deg']})
    const likeOpacity = swipe.x.interpolate({inputRange:[10,100],outputRange:[0,1],extrapolate:"clamp",})
    const nopeOpacity = swipe.x.interpolate({inputRange:[-100,-10],outputRange:[1,0],extrapolate:"clamp",})
    const selectedEvents =useCallback(()=>{return(
        <>
        <Animated.View style={{position:"absolute",top:60,left:20,opacity:likeOpacity,transform:[{rotate:"-30deg"}]}}>
            <ChoosenEvents type={"Like"}/>
        </Animated.View>
        <Animated.View style={{position:"absolute",top:60,right:20,opacity:nopeOpacity,transform:[{rotate:"30deg"}]}}>
            <ChoosenEvents type={"Nope"}/>
        </Animated.View>
        </>
    )
    },[])
  return (
    
    <Animated.View style={[styles.mainContainer,isFirst &&{transform:[...swipe.getTranslateTransform(),{rotate:rotate}]},
    ]}{...rest}>
      <Image style={styles.cardImage} source={item.uri}/>
      <LinearGradient colors={['transparent','rgba(0,0,0,0.3)']} style={styles.placesLinearGradient}>
        <Text style={styles.placesName}>{item.title}</Text>
      </LinearGradient>
      {isFirst && selectedEvents()}
    </Animated.View>
    
  )
}

export default PlacesCard

const styles = StyleSheet.create({
    mainContainer:{
        width: width-50,
        height: height-250,
        alignSelf:"center",
        position:"absolute",
        top:100,
        borderRadius:15
    },
    cardImage:{
        width:"100%",
        height:"100%",
        borderRadius:15

    },
    placesLinearGradient:{
        width:"100%",
        height:"100%",
        borderRadius:15,
        position:"absolute"
    },
    placesName:{
        position:"absolute",
        bottom:20,
        left:5,
        //backgroundColor:"rgba(0,0,0,0.5)",
        fontSize:30,
        color:"white",
        fontWeight:600,
        paddingLeft:7.5,
        paddingRight:7.5,
    }
})