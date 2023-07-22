/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import HomeScreen from './pages/homescreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './pages/details-screen/DetailedScreen';
import { useFonts } from 'expo-font';
import { Text, View } from 'react-native';

const Stack = createNativeStackNavigator();

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
              fontFamily: 'Heebo-Bold'            
            },
            headerTitleAlign: "center",
            headerShadowVisible: true, 
          }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
