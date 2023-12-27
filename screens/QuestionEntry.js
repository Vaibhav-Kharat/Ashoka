import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import { firebaseAuth, firebaseDB } from "../firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";

export default function QuestionEntry() {
  const [question, setQuestion] = useState("");

  const staticImage = require("../assets/cover.jpg");
  const [title, setTitle] = useState("");

  const onSubmit = async () => {
    try {
      const docRef = await addDoc(collection(firebaseDB, "questions"), {
        question: question,
        title: title,
        email: firebaseAuth.currentUser.email,
        answered: false,
      });
      alert("success");
    } catch (error) {
      alert("errorrr" + error);
    }
  };
  return (
    <View style={styles.container}>
      <Text></Text>

      <Text></Text>

      <Image style={styles.image} source={staticImage}></Image>

      <Text style={styles.text}>Question Entry</Text>
      <Text>Title:</Text>
      <TextInput
        onChangeText={(val) => {
          setTitle(val);
        }}
        style={styles.inputs}
        placeholder=""
      ></TextInput>
      <Text>Question:</Text>
      <TextInput
        onChangeText={(val) => {
          setQuestion(val);
        }}
        style={styles.inputs}
      ></TextInput>
      <Button color="#daa520" onPress={onSubmit} title="Sumbit Question" />
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
    margin: 10,
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
