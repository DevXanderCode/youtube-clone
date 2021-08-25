import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constant from 'expo-constants';

// screens
import Home from './src/screens/Home';
import Search from './src/screens/Search';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Home /> */}
      <Search />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant?.statusBarHeight,
  },
});
