import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import Constant from 'expo-constants';

const VideoPlayer = ({ route }) => {
  const { title, videoId } = route?.params;
  return (
    <View style={styles.container}>
      <View style={styles?.videoContainer}>
        <WebView
          source={{ uri: `https://www.youtube.com/embed/${videoId}` }}
          javaScriptEnabled
          domStorageEnabled
        />
      </View>
      <Text style={styles?.title} numberOfLines={2} ellipsizeMode='tail'>
        {title}
      </Text>
      <View style={{ borderBottomWidth: 1 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant?.statusBarHeight,
  },
  videoContainer: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 20,
    margin: 9,
    width: Dimensions.get('screen').width - 50,
  },
});

export default VideoPlayer;
