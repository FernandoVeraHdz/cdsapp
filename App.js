import React, { useState,useEffect } from 'react';
import { LogBox } from 'react-native';
import Navigation from "./app/navigation/Navigation"
import NavigationLogin from './app/components/StackLogin/NavigationLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  LogBox.ignoreAllLogs(true)
  const [exitsSesion,setExitsSession]=useState(false)
  const [reload,setReload]=useState(false)

  useEffect(async ()=>{
    try{
      const session = await AsyncStorage.getItem("@session");
      console.log("session", session);
      if (session !== null) {
        setExitsSession(true)
        console.log("entro al que si existen datos");
      }else{
        setExitsSession(false)
      }
    }catch(err){
      console.log("err", err);
    }
    setReload(false)
  },[reload])
  return exitsSesion ? <Navigation/> :  <NavigationLogin  setReload={setReload} setExitsSession={setExitsSession} />
}
