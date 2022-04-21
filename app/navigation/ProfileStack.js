import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginForm from '../components/profile/LoginForm'
import Navigation from "../navigation/Navigation"
import Perfil from '../components/profile/Perfil'

const Stack=createStackNavigator();


export default function ProfileStack(props) {
    const {route}=props
    const {setReload, setExitsSession} = route.params
  return (

    <Stack.Navigator
    screenOptions={{
        headerMode:'screen',
        headerTintColor: 'white',
        headerStyle:{backgroundColor:'#0368C0'}
    }}
    >
        <Stack.Screen
            name="perfi"
            component={Perfil}
            options={{title:"perfil"}}
            initialParams={{setReload:setReload, setExitsSession: setExitsSession}}

        />

        <Stack.Screen
            name="loginForm"
            component={LoginForm}
            options={{title:"Form Iniciar Sesion"}}
        />


    </Stack.Navigator>
    
  )
}

const styles = StyleSheet.create({})