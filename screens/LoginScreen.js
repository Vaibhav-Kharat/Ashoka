import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import { firebaseAuth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = firebaseAuth;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Sign in failed: " + error);
    } finally {
      setLoading(false);
    }
  };
  const staticImage = require("../assets/cover.jpg");
  return (
    <View style={styles.container}>
      {/* <Image source={staticImage} style={styles.image} /> */}
      <Text style={styles.text}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.inputs}
        onChangeText={(val) => {
          setEmail(val);
        }}
      ></TextInput>
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.inputs}
        onChangeText={(val) => {
          setPassword(val);
        }}
      ></TextInput>
      <Button onPress={signIn} color="#daa520" title="Log in"></Button>
      <Text style={styles.text2}>Don't have an account?</Text>
      <Button
        color="#daa520"
        onPress={() => {
          navigation.navigate("Signin");
        }}
        title="Sign in"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  text2: {
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
  inputs: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    display: "flex",
    resizeMode: "stretch",
    width: "100%",
    height: "100px",
    alignItems: "center",
    marginBottom: 100,
  },
});
