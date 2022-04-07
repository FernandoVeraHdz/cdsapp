import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import {Input,Button,Icon}  from "react-native-elements"
import { isEmpty } from "lodash";
import { LinearGradient } from 'expo-linear-gradient';


export default function ForgotPasswordForm(props) {
  const {navigation, toastRef}=props
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({ password: "", passwordC: "" })
  const [error, setError] = useState({ password: "", passwordC: "" })
  const change = (event, type) => {
    setFormData({...formData, [type] : event.nativeEvent.text});
  }

  const passwordBack = () => {
    if(isEmpty(formData.password) || isEmpty(formData.passwordC)){
        setError({
            password: "Campo obligatorio",
            passwordC: "Campo obligatorio",
        })
    }else{
        setError({
            password:"",
            passwordC:"",
        })
        setShowPassword(true);
        toastRef.current.show("Contraseña recuperada")
    }

}

  return (
    <View style={styles.container}>
    <Text style={styles.texto}>Bienvenido </Text>
    <Text style={styles.texto2}> Recuperar Contraseña</Text>

    <Input
     leftIcon={
          <Icon
              type="material-community"
              name="lock"
              size={20}
              color="#FFF"
          />
      }
      rightIcon={
          <Icon type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#FFF"
              onPress={() => setShowPassword(!showPassword)}
          />
        }
     label="Nueva Contraseña"
     placeholder="************"
     containerStyle={styles.containerInput}
     labelStyle={styles.labelInput}
     secureTextEntry={showPassword}
     onChange={(event) => change(event, "password")}
       errorMessage={error.password}
     />

    <Input
     leftIcon={
          <Icon
              type="material-community"
              name="lock"
              size={20}
              color="#FFF"
          />
      }
      rightIcon={
          <Icon type="material-community"
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#FFF"
              onPress={() => setShowPassword(!showPassword)}
          />
        }
     label="Confirmar  Contraseña"
     placeholder="************"
     containerStyle={styles.containerInput}
     labelStyle={styles.labelInput}
     secureTextEntry={showPassword}
     onChange={(event) => change(event, "passwordC")}
       errorMessage={error.passwordC}
     />

    <Button
        title="Aceptar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
         iconContainerStyle={{ marginRight: 20 }}
         onPress={passwordBack}
      />


  </View>
);
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#1954A0",
  justifyContent: "center",
  alignItems: "center",
},
containerInput:{
  width:"80%",
  marginBottom:20,
  
 
},
labelInput:{
    fontSize:20,
    color:"#FFF",
   
},
btn: {
  color: "#FFF",
  backgroundColor: "#035EC0"
},
btnContainer: {
  borderRadius: 30,
  width: "70%"
},

texto:{
  alignItems:"center",
  fontSize:40,
  color:"#FFF",
},
texto2:{
  alignItems:"center",
  fontSize:20,
  marginBottom:40,
  color:"#FFF",
},



});

