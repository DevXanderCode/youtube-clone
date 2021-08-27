import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';
import { dateFunc } from '../utils/DateTimeController';

const Card = ({ channel, title, videoId, createdAt }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const textColor = colors?.iconColor;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('videoPlayer', { videoId, title });
      }}
    >
      <View style={styles?.container}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
          }}
          style={styles?.imgStyle}
        />
        <View style={[styles?.row, styles?.m5]}>
          <View>
            <MaterialIcons name='account-circle' size={52} color='gray' />
          </View>
          <View style={styles?.ml10}>
            <Text
              style={[styles?.title, { color: textColor }]}
              ellipsizeMode='tail'
              numberOfLines={2}
            >
              {title}
            </Text>
            <View style={[styles?.row, { width: '52%' }]}>
              <Text style={{ color: textColor }}>{channel}</Text>
              <Text style={{ paddingLeft: 10, color: textColor }}>{dateFunc(createdAt)}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  imgStyle: {
    width: '100%',
    height: 200,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  m5: {
    margin: 5,
  },
  ml5: {
    marginLeft: 5,
  },
  ml10: {
    marginLeft: 10,
  },
  title: {
    fontSize: 20,
    width: Dimensions.get('screen').width - 90,
  },
});

export default Card;
