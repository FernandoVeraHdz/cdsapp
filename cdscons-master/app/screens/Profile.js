import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Perfil from "../components/profile/Perfil";

export default function Profile(){
  return(
      <Perfil  style={styles.container} />
  
   
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