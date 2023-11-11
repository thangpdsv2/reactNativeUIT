/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {useState, useEffect} from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import TinhDiemTB from './components/TinhDiemTB';
import Login from './components/Login';
import ProfileScreen from './components/Profile';
import FlatList from './components/FlatList';
import SectionList from './components/SectionList';
import Modal from './components/Modal';
import Products from './pages/Products'
import Flowers from './pages/Flowers'
import SettingsScreen from './components/SettingsScreen'
import Tab2Screen from './components/Tab2'
import Tab1Screen from './components/Tab1'
import { persistCache } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './components/Loader'

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
const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/zgbs11bm62wq',
  cache,
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer Qp_jaAUaoQ_S0jo_qUwlEuJETKHEhbyb5CbQ-33aWnE`,
  },
});
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
