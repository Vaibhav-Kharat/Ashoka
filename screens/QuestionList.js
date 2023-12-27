import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { firebaseDB } from "../firebaseConfig";
import { ScrollView } from "react-native-gesture-handler";

export default function QuestionList({ navigation }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const ref = collection(firebaseDB, "questions");
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
              <Text>User: {e.info.email}</Text>
              <Text>Title: {e.info.title}</Text>
              <Text>Question: {e.info.question}</Text>
              <Text>
                Status: {e.info.answered ? "Answered" : "Not answered"}
              </Text>
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
