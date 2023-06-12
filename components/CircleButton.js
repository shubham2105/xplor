import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import 'expo-dev-client';
import { useNavigation } from '@react-navigation/native';
// Auth Imports
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession;

const Authentication = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image source={imageSource} style={styles.image} />
    </TouchableOpacity>
  );
};

const AuthenticationButtons = () => {
  // Navigation Code
  const navigation = useNavigation();

  // Sign in code for Google Auth
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "167162167836-fgp5c0c3n4hpt4lkb2olnabqsl5e9sok.apps.googleusercontent.com",
    iosClientId: "167162167836-cmgsabb3a5jo5jkn6sg8kj0kc4relubo.apps.googleusercontent.com",
    webClientId: "167162167836-2o40dshfjt7773rus4hgoj68c8k0r5r6.apps.googleusercontent.com",
    expoClientId: "167162167836-oc7oppmp000i1s8bcmpfgmlo3o3l3ud3.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    handleSignInwithGoogle();
  }, [response]);

  async function handleSignInwithGoogle() {
    const user = await AsyncStorage.getItem("@user");
    if (!user) {
      if (response?.type === "success") {
        await getUserInfo(response.authentication.accessToken);
        // Once logged in, send user to Questions
        navigation.navigate("SliderScreen");
      }
      await getUserInfo();
    } else {
      setUserInfo(JSON.parse(user));
    }
  }

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const user = await response.json();
      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
      navigation.navigate("SliderScreen");
    } catch (error) {
      // Handle error
    }
  };
  // End of Sign In code for Google Auth

  // Sign in code for Facebook Auth

  const handleButtonPress = (buttonName) => {
    console.log(`Button "${buttonName}" pressed!`);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.user}>{JSON.stringify(userInfo, null, 2)}</Text> */}
      <View style={styles.buttonContainer}>
        <Authentication
          onPress={() => promptAsync()}
          // onPress={() => handleButtonPress('Google')}
          imageSource={require('../assets/google.png')}
        />
        <Authentication
          onPress={() => handleButtonPress('Facebook')}
          imageSource={require('../assets/images/facebook.png')}
        />
        <Authentication
          onPress={() => handleButtonPress('Apple')}
          imageSource={require('../assets/images/apple.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    marginBottom: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  user: {
    color: 'white',
  },
});

export default AuthenticationButtons;
