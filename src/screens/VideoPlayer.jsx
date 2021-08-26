import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Constant from 'expo-constants';

const VideoPlayer = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from the VideoPlayer Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant?.statusBarHeight,
  },
});

export default VideoPlayer;
