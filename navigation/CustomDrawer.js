import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { handleLogout } from '../components/CircleButton';




const CustomDrawer = (props) => {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView contentContainerStyle={{backgroundColor:"#9c46e9"}}>
        <ImageBackground source={require('../assets/menu-bg.jpeg')} style={{padding:20}}>
            <Image source={require('../assets/images/user-profile.png')} style={{height:80,width:80,borderRadius:40,marginBottom:10}}/>
            <Text style={{color:"white",fontSize:16,fontWeight:600}}>The FrontEnd guy</Text>
        </ImageBackground>
        <View style={{flex:1,backgroundColor:"white",paddingTop:10}}> 
            <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
        <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="share-social-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogout(props.navigation)} style={{paddingVertical: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );}

export default CustomDrawer

const styles = StyleSheet.create({})