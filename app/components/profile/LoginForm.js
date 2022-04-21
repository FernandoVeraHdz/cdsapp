import { isEmpty } from "lodash";
import React, { useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginForm({
  setReload,
  setExitsSession,
  navigation,
  toastRef,
}) {
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });
  const change = (event, type) => {
    setFormData({ ...formData, [type]: event.nativeEvent.text });
  };
  const url = "http://192.168.52.130:8080/cds/auth/login";

  const myLogin = async () => {
    if (isEmpty(formData.username) || isEmpty(formData.password)) {
      setError({
        email: "Campo obligatorio",
        password: "Campo obligatorio",
      });
    } else {
      setError({
        username: "",
        password: "",
      });
      setShowPassword(true);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formData),
        });
        const respuesta = await response.json();
        const token = respuesta.data.token;
        const usuario = respuesta.data.user;
        const { username, person } = usuario;
        const persona = { id: person.id, name: person.name };
        const user = { token: token, username: username, ...persona };
        try {
          await AsyncStorage.setItem("@session", JSON.stringify(user));
          setReload(true);
        } catch (e) {
          console.log("err", e);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

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
        onChange={(event) => change(event, "username")}
        errorMessage={error.username}
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
