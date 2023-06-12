import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SliderScreen from "../screens/SliderScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return(
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= "SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false,gestureEnabled:false}}/>
                <Stack.Screen name="SliderScreen" component={SliderScreen} options={{headerShown:false,gestureEnabled:false}}/>
            </Stack.Navigator>
        //</NavigationContainer>
    )
}

export default AppNavigation;