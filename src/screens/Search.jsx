import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles?.row}>
        <Ionicons name='md-arrow-back' size={32} color='#212121' />
      </View>
      <Text>Hello from the Search Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
