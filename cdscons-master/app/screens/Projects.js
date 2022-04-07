import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import  ProjectScreen from "../components/project/ProjectScreen"

export default function Projects(){
  return(
    <View style={styles.container}>
        <ProjectScreen/>
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