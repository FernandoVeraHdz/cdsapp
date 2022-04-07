import { StyleSheet, Text, View, ScrollView } from 'react-native'
import {Card, LinearProgress} from "react-native-elements"
import React from 'react'

export default function CardsProyects() {
  return (
    <View style={{flexDirection: "row"}}>
      <ScrollView>
          <Card containerStyle={styles.cardStyle}>
              <Card.Title style={styles.styleText}>Gestión de Horarios de profesores</Card.Title>
              <LinearProgress color="#0CCDAC" variant="determinate" value={1}/>
              <Text style={styles.styleText}>Este proyecto se encarga de los horarios de los profesores del CDS</Text>
          </Card>
          <Card containerStyle={styles.cardStyle}>
              <Card.Title style={styles.styleText}>Sistema para el almacen de medicamentos de la enfermería UTEZ</Card.Title>
              <LinearProgress color="#0CCDAC" variant="determinate" value={1} />
              <Text style={styles.styleText}>Sistema para llevar el control de todos los medicamentos</Text>
          </Card>
          <Card containerStyle={styles.cardStyle}>
              <Card.Title style={styles.styleText}>Sitema de bla bla bla bla</Card.Title>
              <LinearProgress color="#0CCDAC" variant="determinate" value={1}/>
              <Text style={styles.styleText}>sistema que facilita la compra de alimentos</Text>
          </Card>
          <Card containerStyle={styles.cardStyle}>
              <Card.Title style={styles.styleText}>Sistema de registro a asesoría académicas</Card.Title>
              <LinearProgress color="#0CCDAC" variant="determinate" value={1}/>
              <Text style={styles.styleText}>bla bla bla bla</Text>
          </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    cardStyle:{
        backgroundColor:"#0368C0",
        borderRadius: 30,
        textAlign: "center",
        borderWidth: 1,
        borderColor: "#0368C0",
        paddingTop: 20,
        paddingBottom: 20,
    },
    styleText:{
      backgroundColor:"#0368C0",
      textAlign: "center",
      color: "#FFF",
    }
  });