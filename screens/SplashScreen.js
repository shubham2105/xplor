import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, ImageBackground, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [request, response, promptAsync] = Google.useAuthRequest({
    // ...your Google Auth client IDs
    androidClientId: "167162167836-fgp5c0c3n4hpt4lkb2olnabqsl5e9sok.apps.googleusercontent.com",
    iosClientId: "167162167836-cmgsabb3a5jo5jkn6sg8kj0kc4relubo.apps.googleusercontent.com",
    webClientId: "167162167836-2o40dshfjt7773rus4hgoj68c8k0r5r6.apps.googleusercontent.com",
    expoClientId: "167162167836-oc7oppmp000i1s8bcmpfgmlo3o3l3ud3.apps.googleusercontent.com",
  });

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const handleSignInWithGoogle = async () => {
      const user = await AsyncStorage.getItem('@user');
      if (!user) {
        if (response?.type === 'success') {
          await getUserInfo(response.authentication.accessToken);
        }
      }
      setTimeout(() => {
        navigation.navigate(user ? 'SliderScreen' : 'SignUp');
      }, 2000);
    };

    handleSignInWithGoogle();
  }, [response]);

  const getUserInfo = async (token) => {
    if (!token) return;
    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const user = await response.json();
      await AsyncStorage.setItem('@user', JSON.stringify(user));
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ImageBackground source={require('../assets/Background.jpg')} style={styles.backgroundImage}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View style={styles.container}>
        <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>xplr</Animated.Text>
        <Animated.Text style={[styles.description, { opacity: fadeAnim }]}>
          Open your door{'\n'} to new{'\n'} opportunities
        </Animated.Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default SplashScreen;
