import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import LoginStack from './LoginStack';
import ForgotPassword from './ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements'

const Tab =createBottomTabNavigator();

export default function NavigationLogin(props) {
  const {setReload, setExitsSession} = props;
    return (
        <NavigationContainer>
            <Tab.Navigator 
              
              initialRouteName="Login"
              screenOptions={({route})=>({
                tabBarIcon: ({color}) => screenOptions(route, color),
                         tabBarActiveTintColor: '#00FCD1',
                         tabBarInactiveTintColor: '#FFF',
                         headerShown: false, 
                         tabBarStyle:{backgroundColor:"#1954A0"}
                   
              })}
            >
    
              <Tab.Screen 
                  name="Login"
                  component={LoginStack}
                  options={{title:"Iniciar Sesión"}}
                  initialParams={{setReload: setReload, setExitsSession: setExitsSession}}
              />
    
              <Tab.Screen 
                  name="ForgotPassword"
                  component={ForgotPassword }
                  options={{title:"Recuperar Contraseña"}}
              /> 
              
            </Tab.Navigator>
        </NavigationContainer>
        
      )
}

const screenOptions=(route,color)=>{
    let iconName;
  
    switch(route.name){
      case "Login":
        iconName="account"
        break;
      case "ForgotPassword":
        iconName="restore"
        break;
    }
  
    return(
      <Icon 
      type='material-community' 
      name={iconName} 
      size={22} 
      color={color}/>
    )
  }