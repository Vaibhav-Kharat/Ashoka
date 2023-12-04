import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable,ImageBackground,Image,ScrollView,Alert} from 'react-native';
import { auth } from '../firebase';

export default function HOME ({navigation}) {
  const handleSignOut = () => {
  Alert.alert("sign out pressed");
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen")
      })
      .catch(error => Alert.alert(error.message))
  }
  return (
    

    <ScrollView>
    <ImageBackground source={require('../assets/mit.jpg')} style={styles.container}>
     <Image source={require('../assets/ashoka.jpg')} style={styles.image} />
      <StatusBar style="auto" />
  
      <Pressable onPress={() => navigation.navigate('UsersProfile')} style={styles.formButton2}>
        <Text></Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('SignUp')} style={styles.formButton2}>
         <Text>SIGNUP</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('LeaveDetails')} style={styles.formButton2}>
         <Text>Leave</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('QuestionsEntry')} style={styles.formButton2}>
         <Text>Complain</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Attendance')} style={styles.formButton2}>
         <Text>Calender</Text>
      </Pressable>
      <Pressable onPress={handleSignOut} style={styles.formButton2}>
         <Text>sign out</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('SalaryDetails')} style={styles.formButton2}>
         <Text>SalaryDetails</Text>
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
