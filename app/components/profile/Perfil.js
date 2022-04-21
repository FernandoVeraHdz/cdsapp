import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Icon } from "react-native-elements";
import { Avatar } from "react-native-elements";
import { isEmpty } from "lodash";
import TextoPerson from "./TextoPerson";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Perfil(props) {
  const [datos, setDatos] = useState({});
  const { setReload, setExitsSession } = props.route.params;
  const cerrarSesion = async () => {
    try {
      await AsyncStorage.removeItem("@session");
      setExitsSession(false);
      setReload(true);

      console.log("cesion cerrada");
    } catch (e) {
      console.log("error", e);
    }
  };

  const session = async () => {
    try {
      const usuario = await AsyncStorage.getItem("@session");
      if (usuario !== null) {
        const person = JSON.parse(usuario);
        setDatos(person);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    session();
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(39,103,187,1) 10.4%", "transparent"]}
        style={styles.background}
      />
      <Avatar
        size={85}
        rounded
        title=""
        containerStyle={{ backgroundColor: "#0368C0", marginTop: 10 }}
      >
        <Avatar.Accessory size={22} />
      </Avatar>
      <View style={styles.view2}>
        <View>
          <Text style={styles.text1}>{datos.name}</Text>
          <Text style={styles.text2}>{datos.username}</Text>
        </View>
      </View>

      <View style={styles.view3}>
        <Button
          title="Cerrar Sesión "
          containerStyle={styles.btnContainer1}
          buttonStyle={styles.btn1}
          iconContainerStyle={{ marginRight: 20 }}
          onPress={cerrarSesion}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1954A0",
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    marginTop: 10,
  },
  view3: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 30,
    color: "#FFF",
    marginLeft: 10,
  },
  text2: {
    fontSize: 20,
    color: "#FFF",
    marginLeft: 10,
    marginBottom: 20,
  },
  text3: {
    fontSize: 25,
    color: "#0CCDAC",
    marginLeft: 10,
    marginTop: 5,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  btn: {
    color: "#FFF",
    backgroundColor: "#0CCDAC",
  },
  btnContainer: {
    borderRadius: 30,
    width: "70%",
    marginBottom: 20,
  },
  containerInput: {
    width: "70%",
    marginBottom: 5,
    marginTop: 5,
  },
  labelInput: {
    fontSize: 15,
    color: "#FFF",
  },

  btn1: {
    color: "#FFF",
    backgroundColor: "#0CCDAC",
  },
  btnContainer1: {
    borderRadius: 30,
    width: "70%",
    marginTop: 10,
  },
});
