import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, LinearProgress } from "react-native-elements";

export default function CardProject({titulo,description}) {
  return (
    <Card containerStyle={styles.cardStyle}>
      <Card.Title style={styles.titletext}>{titulo}</Card.Title>
      <LinearProgress color="#0CCDAC" variant="determinate" value={1} />
      <Text style={styles.styleText}>{description}</Text>
      <Card.Divider />
      <View style={styles.container}></View>
    </Card>
  );
}

const styles = StyleSheet.create({cardStyle: {
    backgroundColor: "#0368C0",
    borderRadius: 15,
    borderWidth: 0,
    width: 370,
    height: 120,
    marginRight: 10,
    marginLeft: 10,
  },
  styleText: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 10,
  },
  titletext: {
    backgroundColor: "#0368C0",
    textAlign: "left",
    color: "#FFF",
    fontSize: 20,
    marginTop: 5,
  },
  container: {
    flexDirection: "row",
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});