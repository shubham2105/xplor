import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ExistingAccountText = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Existing Account?</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.loginButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 780,
    marginHorizontal:100
  
  },
  text: {
    fontSize: 16,
    marginRight: 5,
    color:"white"
  },
  loginButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ExistingAccountText;
