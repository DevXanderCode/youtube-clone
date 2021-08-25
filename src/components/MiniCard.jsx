import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const MiniCard = ({ channel, title, videoId, imageUrl }) => {
  return (
    <View style={[styles?.container, styles?.row]}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        }}
        style={styles?.imgStyle}
      />
      <View style={styles?.textContainer}>
        <Text style={styles?.title} ellipsizeMode='tail' numberOfLines={3}>
          {title}
        </Text>
        <Text>{channel}</Text>
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
