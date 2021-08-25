import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const MiniCard = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
        style={styles?.imgStyle}
      />
      <Text>Hello from the Mini Card component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: '100%',
    height: 200,
  },
});

export default MiniCard;
