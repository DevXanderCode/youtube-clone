import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const Card = () => {
  return (
    <View>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
        style={styles?.imgStyle}
      />
      <View style={styles?.row}>
        <View></View>
        <View>
          <Text>This the name of the Video</Text>
          <Text>This the name of the channel</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    width: '100%',
    height: 200,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default Card;
