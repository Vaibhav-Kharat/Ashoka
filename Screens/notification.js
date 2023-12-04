import { StatusBar } from 'expo-status-bar';
import {Text, View,TextInput} from 'react-native';
import Styles from '../styles';
import { UselessTextInputMultiline} from '../assets/MultiLineText'

export default function OPTION ({navigation}) {
  return (
    <View>
    <TextInput
        multiline
        numberOfLines={4}
        placeholder="Description"
        style={{padding: 10}}
      />
    </View>
  );
}
