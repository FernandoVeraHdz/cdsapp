import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserRecu from '../../screens/profile/UserRecu'
import { createStackNavigator } from '@react-navigation/stack'

const Stack=createStackNavigator();

export default function ForgotPassword() {
    return (
        <Stack.Navigator
        screenOptions={{
            headerMode:'screen',
            headerTintColor: 'white',
            headerStyle:{backgroundColor:'#0368C0'},
            headerShown: false
        }}
        >
            <Stack.Screen
                name="ForgotPassword"
                component={UserRecu}
                options={{title:"Recuperar Contraseña"}}
            />
            
        </Stack.Navigator>
        
      )
}

const styles = StyleSheet.create({})