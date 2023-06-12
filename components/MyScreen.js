import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CircleButton = ({ onPress, imageSource }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.circleButton}>
      <Image source={imageSource} style={styles.circleButtonImage} />
    </TouchableOpacity>
  );
};

const LineWithText = () => {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.line}></View>
      <Text style={styles.text}>OR</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const SignUpButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.signUpButton}>
      <Text style={styles.signUpButtonText}>Sign up with mail</Text>
    </TouchableOpacity>
  );
};

const MyScreen = () => {
  const handleCircleButtonPress = (buttonName) => {
    console.log(`Circle button "${buttonName}" pressed!`);
    // Add your logic here to handle circle button press
  };

  const handleSignUpButtonPress = () => {
    console.log('Sign up button pressed!');
    // Add your logic here to handle sign up action
  };

  return (
    <View style={styles.container}>
      <View style={styles.circleButtonContainer}>
        <CircleButton
          onPress={() => handleCircleButtonPress('Google')}
          imageSource={require('../assets/google.png')}
        />
        <CircleButton
          onPress={() => handleCircleButtonPress('Facebook')}
          imageSource={require('../assets/images/facebook.png')}
        />
        <CircleButton
          onPress={() => handleCircleButtonPress('Apple')}
          imageSource={require('../assets/images/apple.png')}
        />
      </View>
      <LineWithText />
      <SignUpButton onPress={handleSignUpButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  circleButton: {
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
  circleButtonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  text: {
    marginHorizontal: 10,
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signUpButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyScreen;
