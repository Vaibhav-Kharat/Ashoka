import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import Styles from '../styles';
import { Card } from 'react-native-paper';



export default function OPTION({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container4}>
        <Card style={styles.container4}>
          <Text style={Styles.mainHeader}>TITLE</Text>
          <TextInput
            placeholder="Title"
            placeholderTextColor="black"
            style={Styles.inputStyle}
          />
          <Text style={Styles.mainHeader}>DISCRIPTION</Text>
          <StatusBar style="auto" />
          <TextInput
            placeholder="DISCRIPTION"
            placeholderTextColor="black"
            style={Styles.input12}
            multiline={true}
          />
        <Pressable onPress={() => navigation.navigate('HostelDetails')} style={styles.applyleave}>
        <Text>SEND</Text>
      </Pressable>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container4: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    padding: 15,
  },
  input: {
    paddingRight: 10,
    lineHeight: 23,
    flex: 2,
    textAlignVertical: 'top',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
   applyleave:{
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
      height: 4,},}
});


