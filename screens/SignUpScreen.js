import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import 'expo-dev-client';
import CircleButton from "../components/CircleButton";
import LineWithText from "../components/LineWithText";
import SignUpButton from "../components/SignUpButton";
import ExistingAccountText from "../components/ExistingAccountText";
//Auth Imports
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession;

const SignUpScreen = () => {
    //Sign in code
    const [userInfo,setUserInfo] = React.useState(null);
    const [request,response,promptAsync] = Google.useAuthRequest({
      androidClientId:"167162167836-fgp5c0c3n4hpt4lkb2olnabqsl5e9sok.apps.googleusercontent.com",
      iosClientId:"167162167836-cmgsabb3a5jo5jkn6sg8kj0kc4relubo.apps.googleusercontent.com",
      webClientId:"167162167836-2o40dshfjt7773rus4hgoj68c8k0r5r6.apps.googleusercontent.com",
      expoClientId:"167162167836-oc7oppmp000i1s8bcmpfgmlo3o3l3ud3.apps.googleusercontent.com",
    });
  return (
    <ImageBackground
      source={require("../assets/Background1x.jpg")}
      style={styles.backgroundImage}
    >
      <Text style={styles.connectText}>Connect{"\n"}friends</Text>
      <Text style={styles.easyText}>easily &{"\n"}quickly</Text>
      <Text style={styles.description}>
        Our chat app is the perfect way to stay{"\n"}connected with friends
        andfamily.
      </Text>

      <CircleButton />
      <LineWithText />
      <SignUpButton />
      <ExistingAccountText/>

        

      {/* <Text style={styles.orLine}>-------Shubham-------</Text> */}
    </ImageBackground>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    // resizeMode: 'cover',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  connectText: {
    fontSize: 68,
    color: "white",
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 130,
    paddingLeft: 15,
  },
  easyText: {
    fontSize: 68,
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    paddingLeft: 15,
  },
  description: {
    fontSize: 16,
    marginTop: 14,
    paddingLeft: 15,
    color: "#B9C1BE",
  }
});
