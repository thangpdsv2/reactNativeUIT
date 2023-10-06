/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import TinhDiemTB from './components/TinhDiemTB';
import Login from './components/Login';
import Profile from './components/Profile';
import FlatList from './components/FlatList';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {


  return (
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

        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}


export default App;
