import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button,Input,Icon } from "react-native-elements";
import { isEmpty } from "lodash";

export default function UpdateUser({ navigation, route }) {
  const { person } = route.params;
  const [formData, setFormData] = useState({ 
    name:`${person.name}`,
    lastname:`${person.lastname}`,
    motherslastname:`${person.motherslastname}`,
    emailInstitutional:`${person.emailInstitutional}` });
  const [error, setError] = useState({ description: "" });
  const url = "http://192.168.52.130:8080/cds/person/" + perid + "/skills";
  const change = (event, type) => {
    setFormData({ ...formData, [type]: event.nativeEvent.text });
  };

  const agregar = async () => {
    if (isEmpty(formData.description)) {
      setError({
        description: "Campo obligatorio",
      });
    } else {
      setError({
        description: "",
      });
      try {
        const response = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formData),
        });
        const respuesta = await response.json();
        console.log(`veamos que salio ${JSON.stringify(respuesta)}`);
      } catch (error) {
        console.log(`este es el error: ${error.message}`);
      }
    }
  };
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(39,103,187,1) 10.4%", "transparent"]}
        style={styles.background}
      />

      <View style={styles.view3}>
        <Text style={styles.text3}>Actualizar Información</Text>
        <Input
          label="Nombre"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "name")}
          errorMessage={error.description}
        />
        <Input
          label="Apellido Paterno "
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "lastname")}
          errorMessage={error.description}
        />
        <Input
          label="Apellido Materno"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "motherslastname")}
          errorMessage={error.description}
        />
        <Input
          label="Email Institucional"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "emailInstitutional")}
          errorMessage={error.description}
        />
        <Input
          label="Email Personal"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "email")}
          errorMessage={error.description}
        />
        <Input
          label="Celular"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "cellphone")}
          errorMessage={error.description}
        />
        <Input
          label="Telefono"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "phone")}
          errorMessage={error.description}
        />
        <Input
          label="Matricula"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "dni")}
          errorMessage={error.description}
        />
        <Input
          label="Escuela"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "scholl")}
          errorMessage={error.description}
        />
        <Input
          label="Calle"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "street")}
          errorMessage={error.description}
        />
        <Input
          label="No Exterior"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "extNumber")}
          errorMessage={error.description}
        />
        <Input
          label="No Interior"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "intNumber")}
          errorMessage={error.description}
        />
        <Input
          label="C.P"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "postalCode")}
          errorMessage={error.description}
        />
        <Input
          label="Colonia"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "colonia")}
          errorMessage={error.description}
        />
        <Input
          label="Estado"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "estate")}
          errorMessage={error.description}
        />
        <Input
          label="Municipio"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "town")}
          errorMessage={error.description}
        />
        <Button
          title="Actualizar"
          containerStyle={styles.btnContainer}
          buttonStyle={styles.btn}
          icon={
            <Icon
              type="material-community"
              name="checkbox-marked-circle-outline"
              size={20}
              color="#FFF"
            />
          }
          iconContainerStyle={{ marginRight: 20 }}
          onPress={agregar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1954A0",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  view3: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    fontSize: 25,
    color: "white",
    marginLeft: 5,
    marginBottom: 50,
    marginTop: 30,
  },
  containerInput: {
    width: "70%",
    marginBottom: 5,
    tintColor: "white",
    marginTop: 5,
  },
  labelInput: {
    fontSize: 15,
    color: "white",
  },
  btn: {
    color: "#FFF",
    backgroundColor: "#0CCDAC",
  },
  btnContainer: {
    alignSelf: "center",
    alignItems: "stretch",
    borderRadius: 30,
    width: "70%",
    marginBottom: 20,
  },
});
