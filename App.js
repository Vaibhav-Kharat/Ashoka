import React,{ useState } from 'react';
import { StyleSheet, Text, TextComponent, View,ImageBackground } from 'react-native';
import LoginScreen from './Screens/login';
import Notification from './Screens/notification';
import QuestionsEntry from './Screens/QuestionsEntry';
import HomeScreen from './Screens/home';
import ApplyLeave from './Screens/applyleave';
import MyAccount from './Screens/MyAccount';
import Attendance from './Screens/Attendance';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AdminScreen from './Screens/adminScreen';
import SignUp from './Screens/signUp';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                title="Login"
                options={{headerShown: false}}
                  />
            <Stack.Screen
              name="AdminScreen"
              component={AdminScreen}
               title="AdminScreen"
              //options={{headerShown: false }}
                 />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
               title="SignUp"
              //options={{headerShown: false }}
                 />
            
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
               title="Welcome"
              //options={{headerShown: false }}
                 />
        
           <Stack.Screen
              name="Applyleave"
              component={ApplyLeave}
              options={{ title: 'ApplyLeave' }}
                />
            
                <Stack.Screen
              name="MyAccount"
              component={MyAccount}
              options={{ title: 'MyAccount' }}
                />
                    
           <Stack.Screen
              name="QuestionsEntry"
              component={QuestionsEntry}
              options={{ title: 'QuestionsEntry' }}
             // <ImageBackground source{require('./assets/navigation.jpg')}></ImageBackground>
                />

                
    
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{ title: 'Notification' }}
                />    
            <Stack.Screen
              name="Attendance"
              component={Attendance}
              options={{ title: 'Attendance' }}
                />    
                  
          
          

        </Stack.Navigator>
    </NavigationContainer>
  
      
  );
}
