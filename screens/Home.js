import { useContext, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { UserContext } from "../App";
import { firebaseAuth, firebaseDB } from "../firebaseConfig";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
export default function Home({ navigation }) {
  const user = firebaseAuth.currentUser;

  return (
    <>
      {user && (
        <>
          {user.email == "admin@gmail.com" ? (
            <AdminPage navigation={navigation} />
          ) : (
            <UserPage navigation={navigation} user={user} />
          )}
        </>
      )}
    </>
  );
}
const testDB = async () => {
  try {
    const docRef = await setDoc(doc(firebaseDB, "users", "asdslfh"), {
      firstName: "firstName",
      lastName: "lastName",
      phone: "phone",
      email: "email",
      department: "department",
    });
  } catch (error) {
    alert("errorrr" + error);
  }
};

const UserPage = ({ user, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, {user && user.displayName}</Text>
      <Image style={styles.image} source={staticImage}></Image>
      {/* <Text style={styles.text}>{user && user.uid}</Text> */}
      <Button
        color="#daa520"
        title="My Account"
        onPress={() => {
          navigation.navigate("Inside", { screen: "MyAccount" });
        }}
      ></Button>
      <Text />
      <Button
        color="#daa520"
        title="Apply Leave"
        onPress={() => {
          navigation.navigate("Inside", { screen: "ApplyLeave" });
        }}
      ></Button>
      <Text />
      <Button
        color="#daa520"
        title="Question Entry"
        onPress={() => {
          navigation.navigate("Inside", { screen: "QuestionEntry" });
        }}
      ></Button>
      <Text />
      <Button
        color="#daa520"
        title="Calendar"
        onPress={() => {
          navigation.navigate("Inside", { screen: "Calendar" });
        }}
      ></Button>
      <Text />
      <Button
        title="Log out"
        color="#daa520"
        onPress={() => firebaseAuth.signOut()}
      ></Button>
      <Text></Text>
      <Text></Text>
      <Text></Text>

      <Text></Text>
    </View>
  );
};

const staticImage = require("../assets/cover.jpg");
const AdminPage = ({ navigation }) => {
  const [data, setData] = useState();
  const load = async () => {
    const querySnapshot = await getDocs(collection(firebaseDB, "users"));
    return querySnapshot;
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome, Admin</Text>
      <Image style={styles.image} source={staticImage}></Image>
      <Button
        title="Show all users"
        onPress={() => {
          navigation.navigate("Inside", { screen: "UserList" });
        }}
        color="#daa520"
      ></Button>
      <Text></Text>
      <Button
        title="Show Complains"
        onPress={() => {
          navigation.navigate("Inside", { screen: "QuestionList" });
        }}
        color="#daa520"
      ></Button>
      <Text></Text>
      <Button
        title="Leave Applications"
        // onPress={() => {
        //   navigation.navigate("Inside", { screen: "QuestionList" });
        // }}
        color="#daa520"
      ></Button>
      <Text></Text>
      <Button
        title="Leave Details"
        onPress={() => {
          navigation.navigate("Inside", { screen: "LeaveDetails" });
        }}
        color="#daa520"
      ></Button>
      <Text></Text>
      <Button
        title="Salary Details"
        onPress={() => {
          navigation.navigate("Inside", { screen: "SalaryDetails" });
        }}
        color="#daa520"
      ></Button>
      <Text></Text>

      <Button
        color="#daa520"
        style={styles.button}
        title="Log out"
        onPress={() => firebaseAuth.signOut()}
      ></Button>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 40,
    flex: 1,
  },
  // button: {
  //   : "#daa520",
  //   flex: 1,
  // },
  justifyContent: "center",
  inputs: {
    // height: 45,
    // marginLeft: 16,
    // borderBottomColor: "#FFFFFF",
    // flex: 1,
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  inputContainer: {
    // borderBottomColor: "#05C203",
    // backgroundColor: "#FFFFFF",
    // borderRadius: 5,
    // borderBottomWidth: 1,
    // width: 350,
    // height: 45,
    // marginBottom: 20,
    // flexDirection: "row",
    // alignItems: "center",
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
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
