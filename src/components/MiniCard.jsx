import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import moment from 'moment';

const MiniCard = ({ channel, title, videoId, createdAt }) => {
  const dateFunc = (date) => {
    let today = moment(new Date());
    let diff = today.diff(moment(`${date}`), 'second');
    // let diff = today.diff(new Date(`${date}`), 'second');
    // console.log('logging diff', diff);
    if (diff === 0 || diff < 60) {
      return 'just now';
    } else if (diff === 60) {
      return '1 min ago';
    } else if (diff > 60 && diff < 3600) {
      return `${Math.floor(diff / 60)} min ago`;
    } else if (diff > 3600 && diff < 86400) {
      return `${Math.floor(diff / 3600)} hours ago`;
    } else if (diff >= 86400 && diff < 2419200) {
      return `${Math.floor(diff / 86400)} days ago`;
    } else if (diff === 2419200) {
      return `${Math.floor(diff / 2419200)} month ago`;
    } else if (diff >= 2419200 && diff < 31536000) {
      return `${Math.floor(diff / 2419200)} months ago`;
    } else if (diff >= 31536000) {
      return `${Math.floor(diff / 31536000)} year ago`;
    }
  };
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
