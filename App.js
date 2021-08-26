import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// navigations
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// screens
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Explore from './src/screens/Explore';
import Subcribe from './src/screens/Subcribe';
import VideoPlayer from './src/screens/VideoPlayer';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tabs.Navigator initialRouteName='home'>
      <Tabs.Screen name='home' component={Home} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='subscribe' component={Subcribe} />
    </Tabs.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='rootHome'>
        <Stack.Screen name='rootHome' component={RootHome} />
        <Stack.Screen name='search' component={Search} />
        <Stack.Screen name='videoPlayer' component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
