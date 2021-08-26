import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Constant from 'expo-constants';

import Header from '../components/Header';

const ExploreCard = () => {
  return (
    <View style={styles?.cardContainer}>
      <Text>Hello from the Explore Card</Text>
    </View>
  );
};

const Explore = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Hello from the Explore Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant?.statusBarHeight,
  },
  cardContainer: {
    width: 120,
    borderRadius: 4,
    backgroundColor: 'red',
  },
});

export default Explore;
