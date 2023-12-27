import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { firebaseDB } from "../firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";

export default function UserList({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ref = collection(firebaseDB, "users");
    onSnapshot(ref, (users) => {
      users.docs.map((e) => console.log(e.data()));
      setData(
        users.docs.map((user) => ({
          id: user.id,
          info: user.data(),
        }))
      );
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((e) => {
          return (
            <>
              <Text>{e.id}</Text>
              <Text>
                Name: {e.info.firstName} {e.info.lastName}
              </Text>
              <Text>Department: {e.info.department}</Text>
              <Text>Phone: {e.info.phone}</Text>
              <Text>Email: {e.info.email}</Text>
              <Text>Remaining Leaves: {e.info.remainingLeaves}</Text>
              <Text></Text>
            </>
          );
        })}
      </ScrollView>
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
});
