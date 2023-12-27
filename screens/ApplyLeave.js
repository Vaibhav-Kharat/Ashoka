import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import { firebaseDB } from "../firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";

export default function ApplyLeave() {
  const staticImage = require("../assets/cover.jpg");
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>

      <Text></Text>

      <Image style={styles.image} source={staticImage}></Image>

      <Text style={styles.text}>Leave Reason</Text>
      <Text>Specify Reason:</Text>
      <TextInput style={styles.inputs}></TextInput>
      <Text>Pick a Date</Text>
      <Button title="Apply Leave" color="#daa520" />
      <Text></Text>

      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Text></Text>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  inputs: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    textAlign: "left",
    margin: 0,
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    display: "flex",
    resizeMode: "stretch",
    width: "100%",
    height: "100px",
    borderRadius: 500,
    alignItems: "center",
    marginBottom: 100,
  },
});
