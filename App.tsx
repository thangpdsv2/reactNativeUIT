/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/Profile';
import SettingsScreen from './components/SettingsScreen'
import Tab2Screen from './components/Tab2'
import Tab1Screen from './components/Tab1'
import {ApolloProvider,InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './components/Loader'
import SignUp from './components/Signup';
import Login from './components/Login';
import Category from './components/Category';
import CategoryDetail from './components/CategoryDetail'
import NewsDetails from './components/NewsDetails'
import AuthorDetails from './components/AuthorDetails'

import client from './utils/ctf-client'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BookmarkNav = () => (
  <Tab.Navigator>
    <Tab.Screen name="BookmarkScreen" component={Tab1Screen}  />
    <Tab.Screen name="Like" component={Tab2Screen} />
  </Tab.Navigator>
);
function Root() {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Drawer.Screen name="Home" component={HomeScreen}/>
      <Drawer.Screen name="Category" component={Category} />
      <Drawer.Screen name="Bookmark" component={BookmarkNav}/>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="SignIn/SignUp" component={Login} />
    </Drawer.Navigator>
  );
}
const cache = new InMemoryCache();

function App(): JSX.Element {
  const [loadingCache, setLoadingCache] = useState(true)
  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => {
      setLoadingCache(false)
    })
  }, [])
  if (loadingCache) {
    return <Loader />;
  }

  return (
    <ApolloProvider client={client}>
      
      <NavigationContainer>
        {
          <Stack.Navigator initialRouteName='App' screenOptions={{headerShown:false}}>
            <Stack.Screen
              name="App"
              component={Root}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="CategoryDetail" component={CategoryDetail} />
            <Stack.Screen name="NewsDetails" component={NewsDetails} />
            <Stack.Screen name="AuthorDetails" component={AuthorDetails} />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </ApolloProvider>
  );
}


export default App;
