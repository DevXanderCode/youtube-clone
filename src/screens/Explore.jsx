import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Constant from 'expo-constants';

import Header from '../components/Header';

const ExploreCard = ({ name }) => {
  return (
    <View style={styles?.cardContainer}>
      <Text style={styles?.cardTitle}>{name}</Text>
    </View>
  );
};

const Explore = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles?.row}>
        <ExploreCard name='Gaming' />
        <ExploreCard name='Trending' />
        <ExploreCard name='Music' />
        <ExploreCard name='News' />
        <ExploreCard name='Movies' />
        <ExploreCard name='Fashion' />
      </View>
      <Text style={styles?.title}>Trending Videos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant?.statusBarHeight,
  },
  cardContainer: {
    width: 180,
    height: 50,
    borderRadius: 4,
    backgroundColor: 'red',
    marginTop: 10,
  },
  cardTitle: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    margin: 8,
    borderBottomWidth: 2,
    fontSize: 22,
  },
});

export default Explore;
