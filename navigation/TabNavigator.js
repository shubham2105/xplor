import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SliderScreen from '../screens/SliderScreen';
import ExplorePlaces from '../screens/ExplorePlaces';
import YourPicks from '../screens/YourPicks';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () =>{
    return(
       <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{backgroundColor:"#1a1a1a",borderTopWidth:0},tabBarInactiveTintColor:"white",tabBarActiveTintColor:"#9c46e9"}}>
        <Tab.Screen name="slider" component={SliderScreen}options={{tabBarIcon:({color,size})=>(<Ionicons name="home-outline" size={size} color={color} />)}}/>
        <Tab.Screen name="Explore Places" component={ExplorePlaces}options={{tabBarIcon:({color,size})=>(<Ionicons name="location-outline" size={size} color={color} />)}}/>
        <Tab.Screen name="Your Picks" component={YourPicks}options={{tabBarIcon:({color,size})=>(<Ionicons name="heart-outline" size={size} color={color} />)}}/>
       </Tab.Navigator>
    )

}

export default TabNavigator;
