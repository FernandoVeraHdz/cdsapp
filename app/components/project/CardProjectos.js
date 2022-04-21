import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, Icon } from 'react-native-elements'


export default function CardProjectos({ titulo, description, idpro, idu }) {
  const sendProyecto = async () => {
    console.log("ENTRE A LA FUNCION");
    const url =
      "http://192.168.68.117:8080/cds/person/" + idu + "/projects/" + idpro;
    console.log(`esta es la url:${url}`);
    try {
      const response = await fetch(url, {
        method: "PUT",
      });
      const respuesta = await response.json();
      console.log(`esta es la ${JSON.stringify(respuesta.data)}`);
    } catch (error) {
      console.log("este es el error: " + error.message);
    }
  };
  return (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.titletext}>{titulo}</Card.Title>
      <Text style={styles.styleText}>{description}</Text>
      <View style={styles.container}>
        <Button
          style={styles.button}
          containerStyle={styles.btnContainer}
          buttonStyle={{ backgroundColor: "#0368C0" }}
          icon={<Icon name="check" size={25} color="white" />}
          onPress={() => sendProyecto()}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 390,
    height: 120,
    marginRight: 5,
    marginLeft: 5,
  },
  styleText: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 12,
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
  btnContainer: {
    marginTop: 10,
  },
  titletext: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 20,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});