import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Alert } from "react-native";
import { firebaseDB } from "../firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function LeaveDetails({ navigation }) {
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
  const handleEdit = (rem, email, info) => {
    Alert.alert(
      "Edit",
      "Current Remaining Leaves: " + rem.toString(),
      [
        {
          text: "-1",
          onPress: async () => {
            try {
              const docRef = await setDoc(doc(firebaseDB, "users", email), {
                ...info,
                remainingLeaves: info.remainingLeaves - 1,
              });
              console.log("removed one");
            } catch (error) {
              alert("errorrr " + error);
            }
          },
        },
        {
          text: "+1",
          onPress: async () => {
            try {
              const docRef = await setDoc(doc(firebaseDB, "users", email), {
                ...info,
                remainingLeaves: info.remainingLeaves + 1,
              });
              console.log("added one");
            } catch (error) {
              alert("errorrr " + error);
            }
          },
        },
      ],
      {
        cancelable: false,
      }
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((e) => {
          return (
            <View style={styles.card}>
              <View>
                <Text>{e.id}</Text>
                <Text>
                  Name: {e.info.firstName} {e.info.lastName}
                </Text>
                <Text>Remaining Leaves: {e.info.remainingLeaves}</Text>
                <Text></Text>
              </View>
              <View>
                <Button
                  title="Edit"
                  onPress={() =>
                    handleEdit(e.info.remainingLeaves, e.info.email, e.info)
                  }
                ></Button>
              </View>
            </View>
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
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
