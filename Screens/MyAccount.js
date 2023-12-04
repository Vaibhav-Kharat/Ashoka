import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from '../component/example';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
  <ScrollView>
    <View style={styles.container}>
      <Card style={styles.container}>
        <AssetExample />
      </Card>
    </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    padding: 15,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
