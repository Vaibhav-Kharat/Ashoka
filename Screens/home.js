import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable,ImageBackground,Image,ScrollView, Alert} from 'react-native';
import React, { useState,useEffect } from "react";
import { auth } from '../firebase';



export default function HOME ({navigation}) {
const handleSignOut = () => {
  
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen")
      })
      .catch(error => Alert.alert(error.message))
  }
  const [name, setName] = useState ("")

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setName(user.email)
      }
    })
    return unsubscribe
  }, [])

  return (
    <ScrollView>
    <Text>{name}</Text>
    <ImageBackground source={require('../assets/background1.jpg')} style={styles.container}>
     <Image source={require('../assets/ashoka.jpg')} style={styles.image} />
      <StatusBar style="auto" />
  
      <Pressable onPress={() => navigation.navigate('MyAccount')} style={styles.formButton2}>
        <Text>MyAccount</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Applyleave')} style={styles.formButton2}>
         <Text>ApplyLeave</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Notification')} style={styles.formButton2}>
         <Text>Notification</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('QuestionsEntry')} style={styles.formButton2}>
         <Text>QuestionsEntry</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Attendance')} style={styles.formButton2}>
         <Text>Calender</Text>
      </Pressable>
      <Pressable onPress={handleSignOut} style={styles.formButton2}>
         <Text>SignOut</Text>
      </Pressable>
    </ImageBackground>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    container: {    
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20
  },
  image:{
    width:250,
    height: 250,
    borderRadius: 150,
    marginHorizontal:55,
    marginVertical: 30,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: "#000",
  },
  formButton2: {
    backgroundColor: '#daa520',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal:0,
    marginVertical: 15,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});
