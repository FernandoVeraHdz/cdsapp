import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CardHome({nombre,celular,emailP, emailIn, phone}) {
  return (
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
              <Text style={styles.styleText}>{nombre}</Text>
              <Text style={styles.styleText}>{celular}</Text>
              <Text style={styles.styleText}>{emailP}</Text>
              <Text style={styles.styleText}>{emailIn}</Text>
              <Text style={styles.styleText}>{phone}</Text>
          </Card>
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
})