import React from 'react'
import { useState } from 'react'
import type { PropsWithChildren } from 'react';
import { ThemeContext } from '../../Context'
import ButtonTest from '../Button'
import {
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';

const HomeScreen = ({ navigation }) => {
  const [theme, setTheme] = useState('light')

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <ThemeContext.Provider value={theme}>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Test test</Text>
        <Text>{theme}</Text>
      </View>
      <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
    <ButtonTest></ButtonTest>
    </ThemeContext.Provider>

  )
}

export default HomeScreen