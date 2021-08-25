import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = React.useState('');
  return (
    <View style={styles.container}>
      <View
        style={[
          styles?.row,
          styles?.spaceAround,
          { padding: 5, elevation: 5, backgroundColor: '#fff' },
        ]}
      >
        <Ionicons name='md-arrow-back' size={32} color='#212121' />
        <TextInput
          onChangeText={(text) => setSearchValue(text)}
          value={searchValue}
          onSubmitEditing={() => {
            //   this function is called when enter is pressed
          }}
          style={[styles?.w70, styles?.searchInput]}
        />
        <Ionicons name='md-send' size={32} color='#212121' />
      </View>
      <Text>Hello from the Search Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  w70: {
    width: '70%',
  },
  searchInput: {
    backgroundColor: '#e6e6e6',
  },
});

export default SearchScreen;
