import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// layout
import Header from '../components/Header';
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <View style={styles?.container}>
      <Header />
      <Card />
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
