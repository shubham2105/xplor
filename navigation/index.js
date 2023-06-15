import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen";
import SignUpScreen from "../screens/SignUpScreen";
import SliderScreen from "../screens/SliderScreen";
import SurveyForm from "../screens/SurveyForm";
import TabNavigator from "./TabNavigator";
import DrawerNavigator from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return(
        // <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= "SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
                <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false,gestureEnabled:false}}/>
                <Stack.Screen name="SurveyForm" component={SurveyForm} options={{headerShown:false,gestureEnabled:false}}/>
                {/* Drawer Navigator */}
                <Stack.Screen name="SliderScreen" component={DrawerNavigator} options={{headerShown:false,gestureEnabled:false}}/>
            </Stack.Navigator>
        //</NavigationContainer>
    )
}

export default AppNavigation;