import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from "../components/profile/LoginForm"
import Toast from 'react-native-easy-toast'
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native-elements";

export default function Login(props){
  const {setReload, setExitsSession} = props.route.params
  const navigation = useNavigation();
  const toastRef = useRef();
  return(  
    <View style={styles.container}>
    <LinearGradient
      // Background Linear Gradient
      colors={["rgba(39,103,187,1) 10.4%", "transparent"]}
      style={styles.background}
    />
    <ScrollView>
      <Image
        source={require("../../assets/CDS_LOGO_Nuevo.png")}
        resizeMode="contain"
        style={styles.img}
      />
      <LoginForm
        setReload={setReload}
        setExitsSession={setExitsSession}
        navigation={navigation}
        toastRef={toastRef}
      />
    </ScrollView>
    <Toast ref={toastRef} opacity={0.9} position="center" />
  </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1954A0",
    height: "100%",
  },
  img: {
    width: "100%",
    height: 200,
    marginTop: 30,
  },
});
