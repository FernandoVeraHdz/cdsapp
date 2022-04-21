export default function UpdateUser({ navigation, route }) {
  const { perid } = route.params;
  const [formData, setFormData] = useState({ description: "" });
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
          onChange={(event) => change(event, "description")}
          errorMessage={error.description}
        />
        <Input
          label="Correo Institucional"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "description")}
          errorMessage={error.description}
        />
        <Input
          label="Correo Personal"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "description")}
          errorMessage={error.description}
        />
        <Input
          label="Telefono"
          containerStyle={styles.containerInput}
          labelStyle={styles.labelInput}
          onChange={(event) => change(event, "description")}
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
