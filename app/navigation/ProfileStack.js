import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile'
import LoginForm from '../components/profile/LoginForm'
import UserLogin from '../screens/profile/UserLogin'
import Navigation from "../navigation/Navigation"
import Perfil from '../components/profile/Perfil'

const Stack=createStackNavigator();


export default function ProfileStack() {
  return (

    <Stack.Navigator
    screenOptions={{
        headerMode:'screen',
        headerTintColor: 'white',
        headerStyle:{backgroundColor:'#0368C0'}
    }}
    >
        <Stack.Screen
            name="profileStack"
            component={Profile}
            options={{title:"Perfil"}}
        />

        <Stack.Screen
            name="loginForm"
            component={LoginForm}
            options={{title:"Form Iniciar Sesion"}}
        />

        <Stack.Screen
            name="userlogin"
            component={UserLogin}
            options={{title:"Iniciar Sesion"}}
        />

        <Stack.Screen
            name="perfi"
            component={Perfil}
            options={{title:"perfil"}}
        />

        
    </Stack.Navigator>
    
  )
}

const styles = StyleSheet.create({})