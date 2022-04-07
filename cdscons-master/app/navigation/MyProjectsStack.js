import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MyProjects from '../screens/MyProjects'

const Stack=createStackNavigator();

export default function MyProjectsStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerMode:'screen',
        headerTintColor: 'white',
        headerStyle:{backgroundColor:'#0368C0'}
    }}
    >
        <Stack.Screen
            name="myProjectsStack"
            component={MyProjects}
            options={{title:"Mis Proyectos"}}
        />
        
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({

  
})