import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import Skills from '../components/home/Skills'

const Stack=createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerMode:'screen',
        headerTintColor: 'white',
        headerStyle:{backgroundColor:'#0368C0'}
    }}
    >
        <Stack.Screen
            name="homeStack"
            component={Home}
            options={{title:"Inicio"}}
        />
        <Stack.Screen
            name="skills"
            component={Skills}
            options={{title:"Habilidades"}}
        />
        
    </Stack.Navigator>
    
  )
}

const styles = StyleSheet.create({})