import { isEmpty } from "lodash";
import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function LoginForm(props) {
  const { setReload, setExitsSession, navigation, toastRef } = props;
  console.log("props en login", props);

  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({ email: "", password: "" });
  const change = (event, type) => {
    setFormData({ ...formData, [type]: event.nativeEvent.text });
  };

  const login = () => {
    if (isEmpty(formData.email) || isEmpty(formData.password)) {
      setError({
        email: "Campo obligatorio",
        password: "Campo obligatorio",
      });
    } else {
      setError({
        email: "",
        password: "",
      });
      setShowPassword(true);

      async function postData(url = "", data = {}) {
        // Opciones por defecto estan marcadas con un *
        const response = await fetch(url, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
      }

      postData("192.168.52.130:8080/api/auth/login", {
        username: "20203tn032@utez.edu.mx",
        password: "alex995410",
      }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });

      toastRef.current.show("Inicio correcto");
    }
  };

  const myLogin =  async () => {
    try{
      await AsyncStorage.setItem("@session", "erick")
      setReload(true)
    }catch(e){
      console.log("err", e);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bienvenido</Text>
      <Text style={styles.texto2}>Iniciar Sesión</Text>

      <Input
        keyboardType="email-address"
        label="Usuario"
        leftIcon={
          <Icon
            type="material-community"
            name="account"
            size={20}
            color="#FFF"
          />
        }
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        placeholder="becariocds015@gmail.com"
        onChange={(event) => change(event, "email")}
        errorMessage={error.email}
      />

      <Input
        leftIcon={
          <Icon type="material-community" name="lock" size={20} color="#FFF" />
        }
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#FFF"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        label="Contraseña"
        placeholder="************"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        secureTextEntry={showPassword}
        onChange={(event) => change(event, "password")}
        errorMessage={error.password}
      />

      <Button
        title="Ingresar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        iconContainerStyle={{ marginRight: 20 }}
        onPress={myLogin}
      />
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
  containerInput: {
    width: "80%",
    marginBottom: 20,
  },
  labelInput: {
    fontSize: 20,
    color: "#FFF",
  },
  btn: {
    color: "#FFF",
    backgroundColor: "#035EC0",
  },
  btnContainer: {
    borderRadius: 30,
    width: "70%",
  },

  texto: {
    alignItems: "center",
    fontSize: 40,
    color: "#FFF",
  },
  texto2: {
    alignItems: "center",
    fontSize: 20,
    marginBottom: 40,
    color: "#FFF",
  },
});
