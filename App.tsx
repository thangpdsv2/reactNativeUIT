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
import Products from './pages/Products'
import SettingsScreen from './components/SettingsScreen'
import Tab2Screen from './components/Tab2'
import Tab1Screen from './components/Tab1'
import {ApolloProvider,InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './components/Loader'
import client from './utils/ctf-client'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={Tab1Screen} />
    <Tab.Screen name="Tab2" component={Tab2Screen} />
  </Tab.Navigator>
);
const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Products" component={Products} />
  </Stack.Navigator>
);


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
          <Drawer.Navigator initialRouteName="Main">
            <Drawer.Screen name="Main" component={MainStack} />
            <Drawer.Screen name="Tabs" component={TabNavigator} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator>
        }
      </NavigationContainer>
    </ApolloProvider>
  );
}


export default App;
