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
import HomeScreen from './components/HomeScreen';
import TinhDiemTB from './components/TinhDiemTB';
import Login from './components/Login';
import Profile from './components/Profile';
import FlatList from './components/FlatList';
import SectionList from './components/SectionList';
import Modal from './components/Modal';
import Posts from './pages/Posts'
import { persistCache } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './components/Loader'


const Stack = createNativeStackNavigator();
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
          <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Welcome' }}
              />
            <Stack.Screen name="TinhDiemTB" component={TinhDiemTB} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="FlatList" component={FlatList} />
            <Stack.Screen name="SectionList" component={SectionList} />
            <Stack.Screen name="Modal" component={Modal} />
            <Stack.Screen name="Posts" component={Posts} />
          </Stack.Navigator>
        }
      </NavigationContainer>
    </ApolloProvider>
  );
}


export default App;
