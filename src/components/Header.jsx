import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from '@react-navigation/native';
// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const myColor = colors?.iconColor;

  const dispatch = useDispatch();
  return (
    <View style={[styles?.container, { backgroundColor: colors?.headerColor }]}>
      <View style={styles?.row}>
        <AntDesign name='youtube' size={32} style={{ marginLeft: 20 }} color='red' />
        <Text style={[styles?.ml5, { fontSize: 22, fontWeight: '700', color: myColor }]}>
          YouTube
        </Text>
      </View>
      <View style={[styles?.row, { justifyContent: 'space-around', width: 150 }]}>
        <Ionicons name='md-videocam' size={32} color={myColor} />
        <Ionicons
          name='md-search'
          size={32}
          color={myColor}
          onPress={() => navigation.navigate('search')}
        />
        <MaterialIcons
          name='account-circle'
          size={32}
          color={myColor}
          onPress={() => dispatch({ type: 'CHANGE_THEME' })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 45,
    // backgroundColor: colors?.headerColor,
    alignContent: 'center',
    elevation: 6,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  m5: {
    margin: 5,
  },
  ml5: {
    marginLeft: 5,
  },
});

export default Header;
