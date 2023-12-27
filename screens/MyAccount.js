import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { firebaseAuth, firebaseDB } from "../firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";

export default function MyAccount() {
  const displayName = firebaseAuth.currentUser.displayName;
  const [data, setData] = useState([]);
  useEffect(() => {
    const ref = doc(firebaseDB, "users", firebaseAuth.currentUser.email);
    onSnapshot(ref, (users) => {
      console.log(users.data());
      setData({
        department: users.data().department,
        phone: users.data().phone,
        name: users.data().firstName + " " + users.data().lastName,
      });
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name: {data.name}</Text>
      <Text style={styles.text}>Department: {data.department}</Text>
      <Text style={styles.text}>Phone: {data.phone}</Text>
      <Text style={styles.text}>Email: {firebaseAuth.currentUser.email}</Text>
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
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
