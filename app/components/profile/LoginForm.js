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

  const myLogin =  async () => {

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
    }

    try{
      await AsyncStorage.setItem("@session", "iwano")
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
