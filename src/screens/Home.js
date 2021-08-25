import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <View style={styles?.container}>
      <Header />
      <Text>Hello from the Home Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
