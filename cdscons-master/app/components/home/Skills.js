import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Button,Input,Icon } from "react-native-elements";
import { isEmpty } from "lodash";

export default function Skills(props) {

  const {navigation,toastRef}=props
  const [formData, setFormData] = useState({ skills: ""})
  const [error, setError] = useState({ skills: ""})
  const change = (event, type) => {
    setFormData({...formData, [type] : event.nativeEvent.text});
}

const agregar = () => {
  if(isEmpty(formData.skills) ){
      setError({
          skills: "Campo obligatorio"
         
      })
  }else{
      setError({
          skills:""
      })
      
  }

}

  return (
   
    <View  style={styles.container}>
       <LinearGradient
              // Background Linear Gradient
                colors={['rgba(39,103,187,1) 10.4%', 'transparent']}
                style={styles.background}
             />

<View style={styles.view3}>
       <Text style={styles.text3}>Agregar Habilidad</Text>
          <Input
            leftIcon={
                  <Icon
                      type="material-community"
                      name="folder-star-outline"
                      size={20}
                      color="#FFF"
                  />
              } 
            label="Nombre: "
            placeholder="JAVA"
            containerStyle={styles.containerInput}
            labelStyle={styles.labelInput}
            onChange={(event) => change(event, "skills")}
            errorMessage={error.skills}
           />
           <Button 
            title="Agregar"
            containerStyle={styles.btnContainer}
            buttonStyle={styles.btn}
            icon={
              <Icon type="material-community"
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
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#1954A0",
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  view3:{
    marginTop:10,
    justifyContent: "center",
    alignItems: "center",
  },
  text3:{
    fontSize: 25,
    color: "#0CCDAC",
    marginLeft:10,
    marginTop:5,
    
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
  btn: {
    color: "#FFF",
    backgroundColor: "#0CCDAC",
    
  },
  btnContainer: {
    borderRadius: 30,
    width: "70%",
    marginBottom:20
    
  },
})