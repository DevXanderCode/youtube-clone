import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constant from 'expo-constants';
// layout
import Header from '../components/Header';
import Card from '../components/Card';

const HomeScreen = () => {
  return (
    <View style={styles?.container}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant?.statusBarHeight,
  },
});

export default HomeScreen;
