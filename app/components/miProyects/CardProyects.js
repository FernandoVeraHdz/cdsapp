import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Card, LinearProgress } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CardProject from "./CardProject";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardProyects() {
  const [isLoading, setLoading] = useState(true);
  const [datos, setDatos] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [proyectos, setProyectos] = useState([]);

  const session = async () => {
    try {
      const usuario = await AsyncStorage.getItem("@session");
      if (usuario !== null) {
        const person = JSON.parse(usuario);
        setUsuario(person);
        const { id } = person;
        getMyproyects(id);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    session();
  }, []);

  const getMyproyects = async (id) => {
    try {
      const response = await fetch(
        `http://192.168.68.117:8080/cds/person/` + id
      );
      const respuesta = await response.json();
      const data = respuesta.data;
      const { skills, projects } = data;
      setProyectos(projects);
    } catch (error) {
      console.log(`este es el error ${error}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <LinearGradient
        colors={["rgba(39,103,187,1) 10.4%", "transparent"]}
        style={styles.background}
      />
      <ScrollView>
        {proyectos.map((proyecto, i) => {
          return (
            <CardProject
              key={i}
              titulo={proyecto.name}
              description={proyecto.description}
            />
          );
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
