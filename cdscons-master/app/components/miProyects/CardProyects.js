import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, LinearProgress } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CardProject from "./CardProject";

export default function CardsProyects() {
  const [isLoading,setLoading] = useState(true)
  const [datos,setDatos] = useState([])

  const getProyectos = async ()=>{
    try{
      const response = await
      fetch('http://192.168.68.118:8080/cds/proyectos/')
      const json = await response.json();
      setDatos(json)
    }catch(error){
      console.log("Error: "+error)
    }finally{
      setLoading(false)
    }
  }

  const {data}=datos

  let i=0
  let proyectos = []
  for(i in data){
    proyectos.push(data[i])
  }


  useEffect(()=>{
    getProyectos()
  },[])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["rgba(39,103,187,1) 10.4%", "transparent"]}
        style={styles.background}
      />
      <ScrollView>
        {proyectos.map((proyecto,i)=>{
          return(
            <CardProject key={i} titulo={proyecto.name} description={proyecto.description}/>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 120,
    marginRight: 10,
    marginLeft: 10,
  },
  styleText: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 10,
  },
  titletext: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 20,
    marginTop: 5,
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
