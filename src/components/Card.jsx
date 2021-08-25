import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const Card = () => {
  return (
    <View>
      <Text>Hello from the card component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Card;
