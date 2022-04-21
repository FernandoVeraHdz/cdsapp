import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import CardProyects from "../components/miProyects/CardProyects";

export default function MyProjects() {
  return (
    <View style={styles.container}>
      <CardProyects />
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