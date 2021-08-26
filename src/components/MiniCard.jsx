import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { dateFunc } from '../utils/DateTimeController';

const MiniCard = ({ channel, title, videoId, createdAt }) => {
  return (
    <View style={[styles?.container, styles?.row]}>
      <Image
        source={{
          uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
        }}
        style={styles?.imgStyle}
      />
      <View style={styles?.textContainer}>
        <Text style={styles?.title} ellipsizeMode='tail' numberOfLines={3}>
          {title}
        </Text>
        <View style={[styles?.row, { width: '52%' }]}>
          <Text>{channel}</Text>
          <Text style={{ paddingLeft: 10 }}>{dateFunc(createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 5,
    marginBottom: 5,
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
