import { StyleSheet, Text, View } from 'react-native'
import React, {useState, useRef} from 'react'
import { Button, Card, Icon } from 'react-native-elements'
import Toast from 'react-native-easy-toast'
import Loading from "../Loading"


export default function CardProjectos({ titulo, description, idpro, idu }) {
  const toastRef = useRef()
  const [loading, setLoading] = useState(false)

  const sendProyecto = async () => {
    console.log("ENTRE A LA FUNCION");
    const url =
      "http://192.168.52.130:8080/cds/person/" + idu + "/projects/" + idpro;
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
          toastRef={toastRef} setLoading={setLoading}
        />
        <Loading isVisible={loading} text="Agregando Proyecto" />
        <Toast ref={toastRef} opacity={0.9} position="center" />
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