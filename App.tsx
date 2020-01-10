import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import SignIn from './src/pages/SignIn'

export default function App() {

  GoogleSignin.configure();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! kk</Text>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
