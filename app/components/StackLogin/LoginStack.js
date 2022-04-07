import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '../../screens/Login'
import { createStackNavigator } from '@react-navigation/stack'

const Stack=createStackNavigator();

export default function LoginStack(props) {
    const {route}=props
    console.log(route);
    const {setReload, setExitsSession} = route.params
    return (
        <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
            headerMode:'screen',
            headerTintColor: 'white',
            headerStyle:{backgroundColor:'#0368C0'},
            headerShown:false

        }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{title:"Inicio Sesion"}}
                initialParams={{setReload:setReload, setExitsSession: setExitsSession}}
            />
            
        </Stack.Navigator>
        
      )
}

const styles = StyleSheet.create({})