import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SignUpButton = () => {
  return (
    <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.signupbtn}>
            <Text style={styles.btntext}>
                Sign up with mail
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default SignUpButton

const styles = StyleSheet.create({
    signupbtn:{
        backgroundColor:"white",
        borderRadius:12,
        width:"100%",
        height:50,
        alignItems:"center",
        justifyContent:"center"
    },
    btntext:{
        color:"black",
        fontWeight:"600",
    },
    buttonContainer:{
        position:"absolute",
        marginTop:650,
        width:'100%',
        padding:20
    
       

    }
})