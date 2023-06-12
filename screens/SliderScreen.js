import { Animated, ImageBackground, StyleSheet, Text, View,PanResponder, Image} from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import PlacesCard from '../components/PlacesCard';
import { TouchableOpacity } from 'react-native';



const SliderScreen = () => {
  // Dummy Data
const [data,setData]= useState([
  { id: "1", uri: require('../assets/images/gateway.jpeg'), title: "Gateway of India" },
  { id: "2", uri: require('../assets/images/worli_Sealink.jpeg'), title: "Worli Sealink" },
  { id: "3", uri: require('../assets/images/marine_drives.jpeg'), title: "Marine Drives" },
  { id: "4", uri: require('../assets/images/tajhotel.jpeg'), title: "Taj Hotel" },
  { id: "5", uri: require('../assets/images/csmt.jpeg'), title: "CSMT" },
  { id: "6", uri: require('../assets/images/sanjaygandhi.jpeg'), title: "Sanjay Gandhi National Park" },
  { id: "7", uri: require('../assets/images/powai_gokarting.jpeg'), title: "GoKarting - Powai" },
  { id: "8", uri: require('../assets/images/esselworld.jpeg'), title: "Essel world- water park" },
  { id: "9", uri: require('../assets/images/colaba_causeway.jpeg'), title: "Colaba Causeway" },
  { id: "10", uri: require('../assets/images/mahalaxmi_racecourse.jpeg'), title: "Mahalaxmi Hourse Race Course" },
]);
useEffect(()=>{if(!data.length)setData(

  [{ id: "1", uri: require('../assets/images/gateway.jpeg'), title: "Gateway of India"},
  { id: "2", uri: require('../assets/images/worli_Sealink.jpeg'), title: "Worli Sealink" },
  { id: "3", uri: require('../assets/images/marine_drives.jpeg'), title: "Marine Drives" },
  { id: "4", uri: require('../assets/images/tajhotel.jpeg'), title: "Taj Hotel" },
  { id: "5", uri: require('../assets/images/csmt.jpeg'), title: "CSMT" },
  { id: "6", uri: require('../assets/images/sanjaygandhi.jpeg'), title: "Sanjay Gandhi National Park" },
  { id: "7", uri: require('../assets/images/powai_gokarting.jpeg'), title: "GoKarting - Powai" },
  { id: "8", uri: require('../assets/images/esselworld.jpeg'), title: "Essel world- water park" },
  { id: "9", uri: require('../assets/images/colaba_causeway.jpeg'), title: "Colaba Causeway" },
  { id: "10", uri: require('../assets/images/mahalaxmi_racecourse.jpeg'), title: "Mahalaxmi Hourse Race Course" },
]
)},[data])
const swipe = useRef(new Animated.ValueXY()).current;
const panResponder = PanResponder.create({
  onMoveShouldSetPanResponder:()=> true,
  onPanResponderMove:(_,{dx,dy})=>{
    console.log("dx:"+dx+"dy"+dy);
    swipe.setValue({x:dx,y:dy});
  },
  onPanResponderRelease:(_,{dx,dy})=>{
    console.log("relased :"+"dx:"+dx+"dy"+dy);
    let direction = Math.sin(dx);
    let isActionActive = Math.abs(dx)>100
    
    ;
    if(isActionActive){
      Animated.timing(swipe,{toValue:{x:500*dx,y:dy},useNativeDriver:true,duration:500}).start(removeCard);
    }else{
      Animated.spring(swipe,{toValue:{x:0,y:0},useNativeDriver:true,friction:5}).start();
    }
  },
})

const removeCard=useCallback(()=>{
  setData(prevState=> prevState.slice(1));
  swipe.setValue({x:0,y:0})
},[swipe]);

const handleSelection = useCallback((direction)=>{Animated.timing(swipe,{toValue:{x: direction*300,y:0},useNativeDriver:true,duration:500}).start(removeCard);
},[removeCard])

  return (
    <ImageBackground style ={styles.backgroundImage} source={require('../assets/Background.jpg')}>
      {data.map((item,index)=>{
        let isFirst = index ===0;
        let dragHandlers = isFirst?panResponder.panHandlers:{};
        return (<PlacesCard item={item} isFirst={isFirst} swipe={swipe}{...dragHandlers}/>)
      }).reverse()}
      <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nopeButton} onPress={()=>{handleSelection(-1)}}>
            <Image source={require('../assets/images/cross.png')} style={styles.nopeLogo}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.likeButton} onPress={()=>{handleSelection(+1)}}>
            <Image source={require("../assets/images/heart.png")} style={styles.likeLogo}/>
          </TouchableOpacity> 
      </View>
    </ImageBackground>
  )
}

export default SliderScreen

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1
  },
  buttonContainer:{
    width:"100%",
    position:"absolute",
    bottom:40,
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  likeButton:{
    width:70,
    height:70,
    //backgroundColor:"transparent",
    //elevation:5,
    borderRadius:35,
    justifyContent:"center",
    alignItems:"center"
  },
  nopeButton:{
    width:70,
    height:70,
    //backgroundColor:"transparent",
    //elevation:5,
    borderRadius:35, 
    justifyContent:"center",
    alignItems:"center"
  },
  likeLogo:{
    height:50,
    width:50,
    tintColor:"#17B169"
  },
  nopeLogo:{
    height:40,
    width:40,
    tintColor:"#F6006B"
  },
})