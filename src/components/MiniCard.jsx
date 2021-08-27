import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
import { dateFunc } from '../utils/DateTimeController';

const MiniCard = ({ channel, title, videoId, createdAt }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const textColor = colors?.iconColor;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('videoPlayer', { videoId, title });
      }}
    >
      <View style={[styles?.container, styles?.row]}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
          style={styles?.imgStyle}
        />
        <View style={styles?.textContainer}>
          <Text
            style={[styles?.title, { color: textColor }]}
            ellipsizeMode='tail'
            numberOfLines={3}
          >
            {title}
          </Text>
          <View style={[styles?.row, { width: '52%' }]}>
            <Text style={{ color: textColor }}>{channel}</Text>
            <Text style={{ paddingLeft: 10, color: textColor }}>{dateFunc(createdAt)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
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
