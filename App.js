import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import GetBMI from './src/index';

export default function App() {
  return (
    <NativeBaseProvider>
      <GetBMI />
    </NativeBaseProvider>
  );
}
