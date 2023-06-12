import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LineWithText = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>OR</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position:"absolute",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:620
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#cdd1d0',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '400',
    color:"white"
    
  },
});

export default LineWithText;
