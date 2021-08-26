import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

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
  },
});

export default VideoPlayer;
