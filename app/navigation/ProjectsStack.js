import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Projects from '../screens/Projects'

const Stack=createStackNavigator();
export default function ProjectsStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerMode:'screen',
        headerTintColor: 'white',
        headerStyle:{backgroundColor:'#0368C0'}
    }}
    >
        <Stack.Screen
            name="projectsStack"
            component={Projects}
            options={{title:"Proyectos"}}
        />
        
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})