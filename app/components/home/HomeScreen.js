import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {Card, Button,Icon} from "react-native-elements"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import CardHome from './CardHome';

export default function HomeScreen(props) {

  const getInfo = async () => {
    try{
      const response = await
      fetch('http://192.168.68.118:8080/cds/person/')
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
  let informacion = []
  for(i in data){
    proyectos.push(data[i])
  }


  useEffect(()=>{
    getInfo()
  },[])
  

  const navigation = useNavigation()
  return (
    <View  style={{flex: 1, justifyContent:"center", alignItems:"center"}}>
      <LinearGradient
              // Background Linear Gradient
                colors={['rgba(39,103,187,1) 10.4%', 'transparent']}
                style={styles.background}
             />
      <ScrollView>

        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.nombre}>Alexander Machado</Text>
          <CardHome key={i} nombre={informacion.name} celular={informacion.cellphone}
                    emailP={informacion.email} emailIn={informacion.emailInstitutional}
                    direccion={informacion.phone}
          />
          <Card containerStyle={styles.card2}>
              <Card.Title style={styles.cardTitle}  >Información académica</Card.Title>
              <Card.Divider/>
              <View style={styles.container}>
             </View>
              <Text style={styles.styleText}>Universidad Tecnológica UTEZ</Text>
              
          </Card>

          <Card containerStyle={styles.card3}>
          
             <Card.Title style={styles.cardTitle}>Habilidades</Card.Title>
             <View style={styles.container}>
                  <Button
                    style={styles.button}
                    containerStyle={styles.btnContainer}
                    buttonStyle={{ backgroundColor: "#0368C0" }}
                    icon={
                    <Icon 
                      type="material-community" 
                      name="plus" 
                      size={30}
                      color="#0CCDAC" />
                     
                    }
                    onPress={() => navigation.navigate("skills")}
                  />
                </View>
              <Card.Divider/>
              <View style={styles.container}>
              </View>
              <Text style={styles.styleText}>Java</Text>
              <Text style={styles.styleText}>JS</Text>
              <Text style={styles.styleText}>HTML</Text>
              <Text style={styles.styleText}>MySql</Text>
               
          </Card>
          <Button 
            title="Generar CV"
            containerStyle={styles.btnContainer3}
            buttonStyle={styles.btn3}
            icon={
              <Icon type="material-community"
                  name="file-document-outline"
                  size={20}
                  color="#FFF"
                  
              />
            }
             
            
            />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  titulo:{
    textAlign: "center",
    color: "#FFF",
    fontSize:30,
  },
  nombre:{
    textAlign: "center",
    color: "#FFF",
    fontSize:20,
  },
  card: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 200,
  },
  card2: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 130,
  },
  card3: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 180,
  },
  styleText: {
    textAlign: "left",
    color: "#FFF",
    
  },
  cardTitle:{
    textAlign: "left",
    color: "#FFF",
    fontSize:15,
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 94,
  },
  button: {
    width: 30,
    backgroundColor: "#0368C0",
    color: "#0368C0",
  },
  btnContainer:{
    marginTop: 10
  },

  button2: {
    width: 30,
    backgroundColor: "#0368C0",
    color: "#0368C0",
  },
  btnContainer2:{
    marginTop: 10
  },
  container2: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 112,
  },
  btn3: {
    color: "#FFF",
    backgroundColor: "#0CCDAC",
    
  },
  btnContainer3: {
    flex:1,
    borderRadius: 30,
    width: "95%",
    marginTop:10,
    marginLeft:8
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
});