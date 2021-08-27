import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import Constant from 'expo-constants';

import Header from '../components/Header';
import Card from '../components/Card';

const ExploreCard = ({ name }) => {
  return (
    <View style={styles?.cardContainer}>
      <Text style={styles?.cardTitle}>{name}</Text>
    </View>
  );
};

const ExploreHeader = () => {
  const { colors } = useTheme();
  const textColor = colors?.iconColor;
  return (
    <View>
      <View style={styles?.row}>
        <ExploreCard name='Gaming' />
        <ExploreCard name='Trending' />
        <ExploreCard name='Music' />
        <ExploreCard name='News' />
        <ExploreCard name='Movies' />
        <ExploreCard name='Fashion' />
      </View>
      <Text style={[styles?.title, { color: textColor, borderBottomColor: textColor }]}>
        Trending Videos
      </Text>
    </View>
  );
};

const Explore = () => {
  const { searchResult } = useSelector((state) => state);
  return (
    <View style={styles.container}>
      <Header />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <Card
            videoId={item?.id?.videoId}
            title={item?.snippet?.title}
            channel={item?.snippet?.channelTitle}
            createdAt={item?.snippet?.publishedAt}
          />
        )}
        ListHeaderComponent={ExploreHeader}
        keyExtractor={(item) => item?.id?.videoId}
      />
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
