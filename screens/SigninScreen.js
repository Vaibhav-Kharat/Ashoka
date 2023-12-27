import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import { firebaseAuth, firebaseDB } from "../firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

export default function SigninScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [department, setDepartment] = useState("");

  const [phone, setPhone] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [newuserdata, setNewuserdata] = useState([]);
  const auth = firebaseAuth;

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then(async (cred) => {
        try {
          const docRef = await setDoc(
            doc(firebaseDB, "users", cred.user.email),
            {
              firstName: firstName,
              lastName: lastName,
              phone: phone,
              email: email,
              department: department,
              salary: 25000,
              remainingLeaves: 5,
            }
          );
        } catch (error) {
          alert("errorrr" + error);
        }
      });

      updateProfile(auth.currentUser, {
        displayName: firstName + " " + lastName,
      })
        .then(() => {})
        .catch((error) => {
          // An error occurred
          // ...
        });

      navigation.navigate("Inside", { screen: "Home" });
    } catch (error) {
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>

      <InputBox
        placeholder="first name"
        funToRun={(val) => {
          setFirstName(val);
        }}
      />
      <InputBox
        placeholder="last name"
        funToRun={(val) => {
          setLastName(val);
        }}
      />
      <InputBox
        placeholder="email"
        funToRun={(val) => {
          setEmail(val);
        }}
      />
      <InputBox
        placeholder="phone number"
        funToRun={(val) => {
          setPhone(val);
        }}
      />
      <InputBox
        placeholder="department"
        funToRun={(val) => {
          setDepartment(val);
        }}
      />
      <InputBox
        placeholder="password"
        pass
        funToRun={(val) => {
          setPassword(val);
        }}
      />
      <Button color="#daa520" title="Create User" onPress={signUp}></Button>
      <Text style={styles.text2}>Already a user? </Text>
      <Button
        color="#daa520"
        onPress={() => {
          navigation.navigate("Login");
        }}
        title="Log in"
      ></Button>
    </View>
  );
}

const InputBox = ({ placeholder, funToRun, pass }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputs}
        placeholder={placeholder}
        onChangeText={funToRun}
        secureTextEntry={pass ? true : false}
        // onChangeText={(val) => {
        //   setNewuserdata({
        //     ...newuserdata,
        //     updateValue: val,
        //   });
        // }}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
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
  text2: {
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
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
  text: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold",
  },
});
