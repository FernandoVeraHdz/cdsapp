import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Webpdf() {
  const [datos, setDatos] = useState({});

  const session = async () => {
    try {
      const usuario = await AsyncStorage.getItem("@session");
      if (usuario !== null) {
        const person = JSON.parse(usuario);
        setDatos(person);
      }
    } catch (error) {}
  };
  useEffect(() => {
    session();
  }, []);

  const { id, name } = datos;
  const url = "http://192.168.52.130:8080/cds/exportCv/" + id + "/pdf";
  return (
    <WebView
      source={{
        uri: url,
      }}
    />
  );
}

const styles = StyleSheet.create({});
