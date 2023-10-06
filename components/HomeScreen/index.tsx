import React from 'react'
import { useState } from 'react'
import { ThemeContext } from '../../Context'
import {
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigationState } from '@react-navigation/native';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// type HomeScreenProps = StackNavigationState

const HomeScreen = ({ navigation }:any ) => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Test test</Text>
        <Text>{theme}</Text>
        <Text> {typeof(navigation)} </Text>
      </View>
      <Button title="Go to TinhDiemTB" onPress={() => navigation.navigate('TinhDiemTB')} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      <Button title="FlatList" onPress={() => navigation.navigate('FlatList')} />
      <Button title="SectionList" onPress={() => navigation.navigate('SectionList')} />
      <Button title="Modal" onPress={() => navigation.navigate('Modal')} />
    </ThemeContext.Provider>

  )
}

export default HomeScreen