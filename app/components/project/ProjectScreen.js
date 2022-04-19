import React,{useState,useEffect} from "react";
import { View, ScrollView, StyleSheet, Image , ActivityIndicator } from "react-native";
import { Text, Card, Button, Icon, SearchBar } from "react-native-elements";
import { LinearGradient } from 'expo-linear-gradient';
import CardProjectos from "./CardProjectos";


export default function ProjectScreen() {
  const [isLoading,setLoading] = useState(true)
  const [datos,setDatos] = useState([])

  const getProyectos = async ()=>{
    try{
      const response = await
      fetch('http://192.168.1.72:8080/cds/proyectos/')
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
  let proyecto = []
  for(i in data){
    proyecto.push(data[i])
  }
  console.log(proyecto)


  useEffect(()=>{
    getProyectos()
  },[])

  return (
    <View style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
      <LinearGradient
                colors={['rgba(39,103,187,1) 10.4%', 'transparent']}
                style={styles.background}
             />
      <ScrollView>
      {proyecto.map((proyecto,i)=>{
          return(
            <CardProjectos key={i} titulo={proyecto.name} description={proyecto.description}/>
          )
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 120,
    marginRight:10,
    marginLeft:10
  },
  styleText: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 10,
  },
  button: {
    width: 30,
    backgroundColor: "#0368C0",
    color: "#0368C0",
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  btnContainer:{
    marginTop: 10
  },
  titletext: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 20,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
});