import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Alert,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Constant from 'expo-constants';
// layout
import Header from '../components/Header';
import Card from '../components/Card';

const HomeScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [moreLoading, setMoreLoading] = React.useState(false);
  const [count, setCount] = React.useState(10);
  const {
    searchResult,
    list: { trending },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getVideos = () => {
    setIsLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopoular&regionCode=NG&maxResults=10&type=video&key=AIzaSyB9ZnNfz9BFES4TZradArd7BxgP9Q52R0s`
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log('Logging search result', result);
        // setSearchResult(result.items);
        dispatch({ type: 'TRENDING', payload: result?.items });
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('I got this error when i try to search:', err);
        Alert.alert('Something went wrong, please try again');
        setIsLoading(false);
      });
  };

  const showMore = () => {
    setMoreLoading(true);
    setCount((prevCount) => prevCount + 10);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopoular&regionCode=NG&maxResults=${
        count + 10
      }&type=video&key=AIzaSyB9ZnNfz9BFES4TZradArd7BxgP9Q52R0s`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(
          'Logging search result',
          result?.items.slice(Math.max(result?.items.length - 10, 0))?.length
        );
        // setSearchResult(result.items);
        dispatch({
          type: 'SHOW_MORE',
          payload: result?.items.slice(Math.max(result?.items.length - 10, 0)),
        });
        setMoreLoading(false);
      })
      .catch((err) => {
        console.log('I got this error when i try to search:', err);
        Alert.alert('Something went wrong, please try again');
        setMoreLoading(false);
      });
  };

  React.useEffect(() => {
    getVideos();
  }, []);

  const moreButton = () => {
    return (
      <>
        {!isLoading ? (
          moreLoading ? (
            <ActivityIndicator style={{ marginTop: 15 }} size='large' color='gray' />
          ) : (
            <View style={{ margin: 10 }}>
              <Button onPress={showMore} title='Show More' style={{ margin: 10 }} />
            </View>
          )
        ) : null}
      </>
    );
  };
  return (
    <View style={styles?.container}>
      <Header />
      {isLoading && <ActivityIndicator style={{ marginTop: 15 }} size='large' color='red' />}
      <FlatList
        data={trending}
        renderItem={({ item }) => (
          <Card
            videoId={item?.id?.videoId}
            title={item?.snippet?.title}
            channel={item?.snippet?.channelTitle}
            createdAt={item?.snippet?.publishedAt}
          />
        )}
        keyExtractor={(item) => item?.id?.videoId}
        ListFooterComponent={moreButton}
      />
      {/* {moreLoading ? (
        <ActivityIndicator style={{ marginTop: 15 }} size='large' color='gray' />
      ) : (
        <Button onPress={showMore} title='Show More' />
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constant?.statusBarHeight,
  },
});

export default HomeScreen;
