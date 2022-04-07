import { StyleSheet, TextInput , View } from 'react-native'
import React from 'react'

const SearchBarr = () =>{
    return (
      <View style={styles.container}>
        <TextInput placeholder="Busca aquí..."/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#0368C0',
    borderRadius: 15
  },
  TextInput : {
    width: '100%',
    height: "100%",
    paddingLeft: 8,
    textAlign: 'center',
    justifyContent: 'center',
  }
})

export default SearchBarr;