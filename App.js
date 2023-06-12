import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigation from './navigation';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';



WebBrowser.maybeCompleteAuthSession

//web client id : 167162167836-2o40dshfjt7773rus4hgoj68c8k0r5r6.apps.googleusercontent.com
// ios : 167162167836-cmgsabb3a5jo5jkn6sg8kj0kc4relubo.apps.googleusercontent.com
//android : 167162167836-fgp5c0c3n4hpt4lkb2olnabqsl5e9sok.apps.googleusercontent.com

export default function App() {
  //Sign in code
  const [userInfo,setUserInfo] = React.useState(null);
  const [request,response,promptAsync] = Google.useAuthRequest({
    androidClientId:"167162167836-fgp5c0c3n4hpt4lkb2olnabqsl5e9sok.apps.googleusercontent.com",
    iosClientId:"167162167836-cmgsabb3a5jo5jkn6sg8kj0kc4relubo.apps.googleusercontent.com",
    webClientId:"167162167836-2o40dshfjt7773rus4hgoj68c8k0r5r6.apps.googleusercontent.com",
    expoClientId:"167162167836-oc7oppmp000i1s8bcmpfgmlo3o3l3ud3.apps.googleusercontent.com",
  });
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}


