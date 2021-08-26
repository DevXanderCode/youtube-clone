import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  FlatList,
  ActivityIndicator,
} from 'react-native';
// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

import MiniCard from '../components/MiniCard';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  //   console.log('Logging api key', process.env.REACT_APP_API_KEY);

  const searchFunc = () => {
    setIsLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchValue}&type=video&key=AIzaSyB9ZnNfz9BFES4TZradArd7BxgP9Q52R0s`
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log('Logging search result', result);
        setSearchResult(result.items);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('I got this error when i try to search:', err);
        Alert.alert('Something went wrong, please try again');
        setIsLoading(false);
      });
  };

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
          placeholder='search'
          onSubmitEditing={() => {
            //   this function is called when enter is pressed
            searchFunc();
          }}
          style={[styles?.w70, styles?.searchInput]}
        />
        <Ionicons
          name='md-send'
          size={32}
          color='#212121'
          onPress={() => {
            searchFunc();
          }}
        />
      </View>
      {isLoading && <ActivityIndicator style={{ marginTop: 15 }} size='large' color='red' />}
      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <MiniCard
            videoId={item?.id?.videoId}
            title={item?.snippet?.title}
            channel={item?.snippet?.channelTitle}
            createdAt={item?.snippet?.publishedAt}
          />
        )}
        keyExtractor={(item) => item?.id?.videoId}
      />
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