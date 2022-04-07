import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native'

export default function fetch() {
    useFocusEffect(
        useCallback(()=>{
            getUser();
        },[])
    )
    const getUser= async()=>{
        const result = []
        const config={
            headers:{
                Authorization: `Bearer ${infoUser.token}`,
            }
        }
    }
    await fetch("192.168.1.79:8080/cds/proyectos/")

  return (
    <View>
      <Text>fetch</Text>
    </View>
  )
}

const styles = StyleSheet.create({})