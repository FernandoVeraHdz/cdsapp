import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from "../components/profile/LoginForm"
import UserLogin from "../screens/profile/UserLogin"

export default function Login(props){
  const {setReload, setExitsSession} = props.route.params
  return(  
  <UserLogin setReload={setReload} setExitsSession={setExitsSession}  />
  );
}

