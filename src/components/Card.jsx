import React from 'react';
import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';
// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const Card = () => {
  return (
    <View style={styles?.container}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
        style={styles?.imgStyle}
      />
      <View style={[styles?.row, styles?.m5]}>
        <View>
          <MaterialIcons name='account-circle' size={52} color='gray' />
        </View>
        <View style={styles?.ml10}>
          <Text style={styles?.title} ellipsizeMode='tail' numberOfLines={2}>
            This the name of the Video, but the name of this video is very very very long so we can
            test the shorten of the text with react native
          </Text>
          <Text>This the name of the channel</Text>
        </View>
      </View>
    </View>
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
