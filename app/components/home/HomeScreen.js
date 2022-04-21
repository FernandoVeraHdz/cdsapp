import { StyleSheet, Text, View, ScrollView } from "react-native";
import { WebView } from "react-native-webview";
import React, { useState, useEffect, useRef } from "react";
import { Card, Button, Icon } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-easy-toast";
import CardHome from "./CardHome";
import Loading from "../Loading";

export default function HomeScreen(props) {
  const toastRef = useRef();
  const [loading, setLoading] = useState(true);
  const [datos, setDatos] = useState({});
  const [persona, setPersona] = useState({});

  const session = async () => {
    try {
      const usuario = await AsyncStorage.getItem("@session");
      if (usuario !== null) {
        const person = JSON.parse(usuario);
        setDatos(person);
        const { id } = person;
        getInfo(id);
      }
    } catch (error) {}
  };

  useEffect(() => {
    session();
  }, []);
  const { name } = datos;
  const getInfo = async (id) => {
    try {
      const response = await fetch(
        `http://192.168.52.130:8080/cds/person/` + id
      );
      const respuesta = await response.json();
      const data = respuesta.data;
      const {
        name,
        lastname,
        motherslastname,
        cellphone,
        email,
        emailInstitutional,
        scholl,
        address,
        skills,
      } = data;

      const { street, extNumber, colonia, postalCode, town, estate } = address;

      const direccion =
        street +
        " " +
        extNumber +
        " " +
        colonia +
        " " +
        postalCode +
        " " +
        town +
        " " +
        estate;

      const nombre = name + " " + lastname + " " + motherslastname;
      const info = {
        name: nombre,
        cellphone: cellphone,
        email: email,
        emailInstitutional: emailInstitutional,
        scholl: scholl,
        address: direccion,
        skills: skills,
      };

      setPersona(info);
    } catch (error) {
      console.log("Error: " + error);
    } finally {
      setLoading(false);
    }
  };

  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["rgba(39,103,187,1) 10.4%", "transparent"]}
        style={styles.background}
      />
      <ScrollView>
        <Text style={styles.titulo}>Bienvenido</Text>
        <Text style={styles.nombre}>{name}</Text>

        <CardHome
          nombre={persona.name}
          celular={persona.cellphone}
          emailP={persona.email}
          emailIn={persona.emailInstitutional}
          direccion={persona.address}
        />
        <Card containerStyle={styles.card2}>
          <Card.Title style={styles.cardTitle}>
            Información académica
          </Card.Title>
          <View style={styles.container}></View>
          <Text style={styles.styleText}>Universidad {persona.scholl}</Text>
        </Card>

        <Card containerStyle={styles.card3}>
          <Card.Title style={styles.cardTitle}>Habilidades</Card.Title>
          <View style={styles.containerplus}>
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="add" size={45} color="white" />}
              onPress={() => navigation.navigate("skills", { perid: datos.id })}
            />
          </View>
          <View style={styles.container}></View>
          <ScrollView style={{ height: "80%" }}>
            {persona.skills ? (
              persona.skills.map((skill, i) => {
                return (
                  <Text key={i} style={styles.styleText}>
                    {skill.description}
                  </Text>
                );
              })
            ) : (
              <Text style={styles.styleText}>cargando datos</Text>
            )}
          </ScrollView>
        </Card>
        <Button
          title="Generar CV"
          containerStyle={styles.btnContainer3}
          buttonStyle={styles.btn3}
          icon={
            <Icon
              type="material-community"
              name="file-document-outline"
              size={20}
              color="#FFF"
            />
          }
          onPress={() => navigation.navigate("webpdf")}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 30,
  },
  nombre: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 20,
  },
  card: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 200,
    marginRight: 10,
  },
  card2: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 390,
    height: 130,
  },
  card3: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 390,
    height: 180,
  },
  styleText: {
    textAlign: "left",
    color: "#FFF",
  },
  cardTitle: {
    textAlign: "left",
    color: "#FFF",
    fontSize: 15,
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 94,
  },
  containerplus: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 80,
  },
  button: {
    marginTop: 20,
    width: 60,
    backgroundColor: "#0368C0",
    color: "#0368C0",
  },
  btnContainer: {
    marginTop: 10,
    marginEnd: 5,
  },

  button2: {
    width: 30,
    backgroundColor: "#0368C0",
    color: "#0368C0",
  },
  btnContainer2: {
    marginTop: 10,
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
    flex: 1,
    borderRadius: 30,
    width: "95%",
    marginTop: 10,
    marginLeft: 8,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
