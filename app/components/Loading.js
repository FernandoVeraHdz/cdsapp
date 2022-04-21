import React from "react";
import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { Overlay } from "react-native-elements";

export default function Loading(props) {
  const { isVisible, text } = props;
  return (
    <Overlay
      isVisible={isVisible}
      windowsBackgroundColor="rgba(0,0,0,0.5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#1954A0" />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#FFF",
    borderColor: "#1954A0",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#1954A0",
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center",
  },
});
