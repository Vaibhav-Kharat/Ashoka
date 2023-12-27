import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SigninScreen from "./screens/SigninScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createContext, useEffect, useState } from "react";
import { User as i, onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./firebaseConfig";
import Home from "./screens/Home";
import UserList from "./screens/UserList";
import MyAccount from "./screens/MyAccount";
import Calendar from "./screens/Calendar";
import QuestionEntry from "./screens/QuestionEntry";
import ApplyLeave from "./screens/ApplyLeave";
import QuestionList from "./screens/QuestionList";
import LeaveDetails from "./screens/LeaveDetails";

import SalaryDetails from "./screens/SalaryDetails";

export const UserContext = createContext(null);
export default function App() {
  const [user, setUser] = useState(null);
  const Stack = createStackNavigator();
  const InsideStack = createStackNavigator();
  const InsideLayout = () => {
    return (
      <InsideStack.Navigator>
        <InsideStack.Screen name="Home" component={Home} />
        <InsideStack.Screen name="UserList" component={UserList} />

        <InsideStack.Screen name="MyAccount" component={MyAccount} />
        <InsideStack.Screen name="QuestionEntry" component={QuestionEntry} />
        <InsideStack.Screen name="ApplyLeave" component={ApplyLeave} />

        <InsideStack.Screen name="LeaveDetails" component={LeaveDetails} />
        <InsideStack.Screen name="SalaryDetails" component={SalaryDetails} />
        <InsideStack.Screen name="QuestionList" component={QuestionList} />
      </InsideStack.Navigator>
    );
  };

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inside">
        {user ? (
          <Stack.Screen
            name="Inside"
            component={InsideLayout}
            options={{
              headerShown: false,
            }}
          ></Stack.Screen>
        ) : (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
            j
          />
        )}

        <Stack.Screen
          name="Signin"
          component={SigninScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
