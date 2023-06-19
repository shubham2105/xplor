import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SliderScreen from "../screens/SliderScreen";
import TabNavigator from "./TabNavigator";
import CustomDrawer from "./CustomDrawer";
import { Ionicons } from '@expo/vector-icons';
import { color } from "react-native-reanimated";


const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator drawerContent={props=> <CustomDrawer {...props}/>} screenOptions={{headerShown:false,drawerActiveTintColor:"white",drawerActiveBackgroundColor:"#9c46e9",drawerInactiveTintColor:"#333",drawerLabelStyle:{marginLeft:-25,fontSize:16}}}>
            <Drawer.Screen name="Home" component={TabNavigator} options={{drawerIcon:()=>(
                <Ionicons name="home-outline" size={22} color="white"/>
            )}}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;