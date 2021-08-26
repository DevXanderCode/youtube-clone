import React from 'react';
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Constant from 'expo-constants';
// layout
import Header from '../components/Header';
import Card from '../components/Card';

const HomeScreen = () => {
  const { searchResult } = useSelector((state) => state);
  return (
    <View style={styles?.container}>
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
});

export default HomeScreen;
