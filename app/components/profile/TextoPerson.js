import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TextoPerson(nombre,emailP) {
  return (
    <View>
      <Text style={styles.text1}>David Begham</Text>
           <Text style={styles.text2}>kkiceqp@gmail.com</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1954A0",
        
      }, 
      view2:{
        marginTop:10,
        
      },
      view3:{
        marginTop:10,
        justifyContent: "center",
        alignItems: "center",
      },
      text1:{
        fontSize: 30,
        color: "#FFF",
        marginLeft:10,
      },
      text2:{
        fontSize: 20,
        color: "#FFF",
        marginLeft:10,
        marginBottom:20,
      },
      text3:{
        fontSize: 25,
        color: "#0CCDAC",
        marginLeft:10,
        marginTop:5,
        
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      },
      btn: {
        color: "#FFF",
        backgroundColor: "#0CCDAC",
        
      },
      btnContainer: {
        borderRadius: 30,
        width: "70%",
        marginBottom:20
        
      },
      containerInput:{
        width:"70%",
        marginBottom:5,
        marginTop:5,
      },
      labelInput:{
          fontSize:15,
          color:"#FFF",
         
      },
    
      btn1: {
        color: "#FFF",
        backgroundColor: "#0CCDAC",
        
      },
      btnContainer1: {
        borderRadius: 30,
        width: "70%",
        marginTop:10,
        
      },
})