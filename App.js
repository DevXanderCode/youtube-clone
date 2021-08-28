import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// redux
import { createStore, combineReducers } from 'redux';
import { Provider, useSelector } from 'react-redux';
// navigations
import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
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

// reducer
import { reducer } from './src/reducers/reducer';
import { themeReducer } from './src/reducers/themeReducer';
import { listReducer } from './src/reducers/listReducer';

const rootReducer = combineReducers({
  searchResult: reducer,
  myDarkMode: themeReducer,
  list: listReducer,
});

const store = createStore(rootReducer);

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme?.colors,
    headerColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white',
  },
};

const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme?.colors,
    headerColor: '#fff',
    iconColor: '#212121',
    tabIcon: 'red',
  },
};

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootHome = () => {
  const { colors } = useTheme();
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
        activeTintColor: colors?.tabIcon,
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen name='home' component={Home} />
      <Tabs.Screen name='explore' component={Explore} />
      <Tabs.Screen name='subscribe' component={Subcribe} />
    </Tabs.Navigator>
  );
};

export function Navigations() {
  const { myDarkMode } = useSelector((state) => state);
  return (
    // <Provider store={store}>
    <NavigationContainer theme={myDarkMode ? customDarkTheme : customDefaultTheme}>
      <Stack.Navigator headerMode='none' initialRouteName='rootHome'>
        <Stack.Screen name='rootHome' component={RootHome} />
        <Stack.Screen name='search' component={Search} />
        <Stack.Screen name='videoPlayer' component={VideoPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
}

export default () => (
  <Provider store={store}>
    <Navigations />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
