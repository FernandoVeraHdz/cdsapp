import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import {Card, Button,Icon} from "react-native-elements"
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen(props) {
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
        <Text style={styles.nombre}>Marco Daniel Oviedo Roman </Text>
          <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>Informacion personal</Card.Title>
              <View style={styles.container2}>
                  <Button
                    style={styles.button2}
                    containerStyle={styles.btnContainer2}
                    buttonStyle={{ backgroundColor: "#0368C0" }}
                    icon={
                    <Icon 
                      
                      type="material-community" 
                      name="pencil-outline" 
                      size={30}
                      color="#0CCDAC" />
                    }
                  />
                </View>
              <Card.Divider/>
              <View style={styles.container}>
             </View>
              <Text style={styles.styleText}>Marco Daniel Oviedo</Text>
              <Text style={styles.styleText}>7777 1796347</Text>
              <Text style={styles.styleText}>daniel.oviedo5654@gmail.com</Text>
              <Text style={styles.styleText}>20203tn140@utez.edu.mx</Text>
              <Text style={styles.styleText}>Colonia Azteca, Temixco</Text>
          </Card>

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