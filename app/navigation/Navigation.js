import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  {NavigationContainer, UseRoute} from "@react-navigation/native"
import  {createBottomTabNavigator} from "@react-navigation/bottom-tabs" 
import { Icon } from 'react-native-elements'
import HomeStack from "./HomeStack"
import MyProjectsStack  from "./MyProjectsStack"
import ProfileStack  from "./ProfileStack"
import ProjectsStack  from "./ProjectsStack"


const Tab =createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer >
        <Tab.Navigator 
          initialRouteName="home"
          screenOptions={({route})=>({
            tabBarIcon: ({color}) => screenOptions(route, color),
                     tabBarActiveTintColor: '#00FCD1',
                     tabBarInactiveTintColor: '#FFF',
                     headerShown: false, 
                     tabBarStyle:{backgroundColor:"#1954A0"}
               
          })}
        >

          <Tab.Screen 
              name="home"
              component={HomeStack}
              options={{title:"Inicio"}}
          />

          <Tab.Screen 
              name="projects"
              component={ProjectsStack }
              options={{title:"Proyectos"}}
          />  

          <Tab.Screen 
              name="myProjects"
              component={MyProjectsStack }
              options={{title:"Mis Proyectos"}}
          />

          <Tab.Screen 
              name="profile"
              component={ProfileStack }
              options={{title:"Perfil"}}
          />
        </Tab.Navigator>
    </NavigationContainer>
    
  )
}

const screenOptions=(route,color)=>{
  let iconName;

  switch(route.name){
    case "home":
      iconName="home-outline"
      break;
    case "projects":
      iconName="book"
      break;
    case "myProjects":
    iconName="book-open-page-variant"
    break;
    case "profile":
      iconName="account"
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

