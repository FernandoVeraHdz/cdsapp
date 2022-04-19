import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, Icon } from 'react-native-elements'


export default function CardProjectos({titulo,description}) {

  return (
    <Card containerStyle={styles.card}>
          <Card.Title style={styles.titletext}>{titulo}</Card.Title>
          <Text style={styles.styleText}>
            {description}
          </Text>
          <Card.Divider/>
          <View style={styles.container}>
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="check" size={20} color="white" />}
            />
            <Button
              style={styles.button}
              containerStyle={styles.btnContainer}
              buttonStyle={{ backgroundColor: "#0368C0" }}
              icon={<Icon name="close" size={20} color="white" />}
            />
          </View>
    </Card>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#0368C0",
        borderRadius: 15,
        borderWidth: 0,
        width: 370,
        height: 120,
        marginRight:10,
        marginLeft:10
      },
      styleText: {
        backgroundColor: "#0368C0",
        textAlign: "left",
        color: "#FFF",
        fontSize: 10,
      },
      button: {
        width: 30,
        backgroundColor: "#0368C0",
        color: "#0368C0",
      },
      container: {
        flexDirection: "row",
        position: "absolute",
        right: 0,
        bottom: 0,
      },
      btnContainer:{
        marginTop: 10
      },
      titletext: {
        backgroundColor: "#0368C0",
        textAlign: "left",
        color: "#FFF",
        fontSize: 20,
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,
      }
})