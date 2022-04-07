import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "../components/home/HomeScreen";

export default function Home(props){
  const navigation = useNavigation()
  return(
    <View style={styles.container}>
        <HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1954A0",
    justifyContent: "center",
    alignItems: "center",
  }
});