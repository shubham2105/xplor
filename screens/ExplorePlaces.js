import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { Card } from 'react-native-paper';

const places = [
  {
    name: "CSMT",
    image: require("../assets/images/csmt.jpeg"),
  },
  {
    name: "Gateway of India",
    image: require("../assets/images/gateway.jpeg"),
  },
  {
    name:"Worli Sea-Link",
    image: require('../assets/images/worli_Sealink.jpeg'),
  }
];
const ExplorePlaces = () => {
  const renderItem = ({ item }) => (
    <Card style={{ margin: 16,borderRadius:12}}>
      <Card.Cover source={item.image}/>
      <Card.Content style={{backgroundColor:"transparent"}}>
        <Text style={{ fontSize: 16, fontWeight: 'bold',marginVertical:2 }}>{item.name}</Text>
      </Card.Content>
    </Card>
  );

  return (
    <ImageBackground style={styles.backgroundImage} source={require('../assets/Background.jpg')}>
      <SafeAreaView>
        <Text style={{color:"white",justifyContent:"flex-start",padding:10,fontSize:30,top:15,margin:10,fontWeight:"600"}}> Explore Places</Text>
      <FlatList
        data={places}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
backgroundImage:{
  flex:1,
  justifyContent:"center"
}

});

export default ExplorePlaces