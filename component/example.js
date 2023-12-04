import * as React from 'react';
import { Text, View, StyleSheet, Image ,FlatList} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

export default function AssetExample() {
  return (
    <View style={styles.container}>
    
      <Image style={styles.logo} source={require('../assets/ashoka.jpg')} />
      
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:5,
  },
  bold:{
    fontWeight:"bold",
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    fontSize:17,
    fontWeight: 'bold',
  },
  paragraph: {
    margin:1,
    marginTop: 0,
    marginBottom:20,
    fontSize: 14,
    //fontWeight: 'bold',
    textAlignments:"centre",
  },
  logo: {
    height: 228,
    width: 250,
  }
});
