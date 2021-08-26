import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// navigations
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icons
import { Entypo, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

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
    <Tabs.Navigator
      initialRouteName='home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'explore') {
            iconName = focused ? 'explore' : 'explore';
          } else if (route.name === 'subscribe') {
            iconName = 'subscriptions';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
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
