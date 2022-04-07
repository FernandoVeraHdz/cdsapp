import { LinearGradient } from "expo-linear-gradient";
import React,{useState} from "react";
import { StyleSheet, Text, View} from 'react-native';
import { Button,Input,Icon } from "react-native-elements";
import {Avatar} from 'react-native-elements'
import { isEmpty } from "lodash";



export default function Perfil(props){
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
       
    }

}
  return(
    
    <View style={styles.container} >
      <LinearGradient
              // Background Linear Gradient
                colors={['rgba(39,103,187,1) 10.4%', 'transparent']}
                style={styles.background}
             />
        <Avatar
          size={64}
          rounded
          title="Do"
          containerStyle={{ backgroundColor: '#0368C0', marginTop:10}}
        >
        <Avatar.Accessory size={22} />

        </Avatar>

        

        <View style={styles.view2}>
           <Text style={styles.text1}>Daniel Oviedo</Text>
           <Text style={styles.text2}>daniel.oviedo5654@gmail.com</Text>
       </View>

       <View style={styles.view3}>
       <Text style={styles.text3}>Cambiar Contraseña</Text>
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
            label="Confirmar Contraseña"
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

          <Button 
            title="Cerrar Sesión "
            containerStyle={styles.btnContainer1}
            buttonStyle={styles.btn1}
            iconContainerStyle={{ marginRight: 20 }}
            
            />
       </View>
      
       
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1954A0",
    
  }, 
  view2:{
    marginTop:10,
    
  },
  view3:{
    marginTop:10,
    justifyContent: "center",
    alignItems: "center",
  },
  text1:{
    fontSize: 30,
    color: "#FFF",
    marginLeft:10,
  },
  text2:{
    fontSize: 20,
    color: "#FFF",
    marginLeft:10,
    marginBottom:20,
  },
  text3:{
    fontSize: 25,
    color: "#0CCDAC",
    marginLeft:10,
    marginTop:5,
    
  },
  background: {
    position: 'absolute',
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
    marginBottom:20
    
  },
  containerInput:{
    width:"70%",
    marginBottom:5,
    marginTop:5,
  },
  labelInput:{
      fontSize:15,
      color:"#FFF",
     
  },

  btn1: {
    color: "#FFF",
    backgroundColor: "#0CCDAC",
    
  },
  btnContainer1: {
    borderRadius: 30,
    width: "70%",
    marginTop:10,
    
  },
  


});