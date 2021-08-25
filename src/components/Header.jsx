import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// icons
import { Entypo } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles?.container}>
      <View>
        <Entypo name='youtube' size={24} color='red' />
      </View>
      <View></View>
      <Text>Hello from the Header Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: 'white',
  },
});

export default Header;
