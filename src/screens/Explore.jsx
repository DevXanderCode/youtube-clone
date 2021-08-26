import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hello from the Explore Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ExploreScreen;
