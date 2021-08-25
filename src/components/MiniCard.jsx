import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const MiniCard = () => {
  return (
    <View style={[styles?.container, styles?.row]}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
        style={styles?.imgStyle}
      />
      <View style={styles?.textContainer}>
        <Text style={styles?.title} ellipsizeMode='tail' numberOfLines={3}>
          This is the mini card title
        </Text>
        <Text>This is the name of the channel</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignContent: 'center',
    // alignItems: 'center',
  },
  imgStyle: {
    width: '45%',
    height: 100,
  },
  title: {
    fontSize: 17,
    width: Dimensions?.get('screen').width / 2,
  },
  textContainer: {
    paddingLeft: 8,
  },
});

export default MiniCard;
