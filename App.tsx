/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import HomeScreen from './pages/homescreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from './pages/details-screen/DetailedScreen';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MainMenu from './pages/main-menu/MainMenu';


const Stack = createStackNavigator();

function LogoTitle() {
  const [fontsLoaded] = useFonts({
    'Heebo-Bold': require('./assets/fonts/heebo/Heebo-Bold.ttf'),
  });

  return (
    <View>
      <Text style={{ 
        fontFamily: 'Heebo-Bold', 
        fontSize: 20,
        color: '#ffffff'
      }}>כותרת לדוגמה</Text>
    </View>
  );
}

function App(): JSX.Element {


  return (
    
    <NavigationContainer>
    
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            // title: 'כותרת לדוגמה',
            headerTitle: (() => <LogoTitle />),
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',  
            },
            headerTitleAlign: "center",
            headerShadowVisible: true, 
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          presentation: 'card'
        }} />
        <Stack.Screen name="MainMenu" component={MainMenu} options={{
          presentation: 'modal'
        }} />
      </Stack.Navigator>
    
    </NavigationContainer>
    
  );
}

export default App;
