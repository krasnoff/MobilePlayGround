/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function HomeScreen( {navigation}: any ): JSX.Element {
  const [text, setText] = useState<string>('');
  const [fontsLoaded] = useFonts({
    'Heebo-Regular': require('../../assets/fonts/heebo/Heebo-Regular.ttf'),
  });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        //barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //backgroundColor={backgroundStyle.backgroundColor}
        backgroundColor='#f4511e'
        barStyle="light-content"
      />
      <ScrollView>
        <Text>Some text</Text>
        <View>
          <Text>Some more text</Text>
          <Image source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }} style={{width: 200, height: 200}}></Image>
        </View>
        <View style={{
          alignItems: 'center'
          }}>
          <TextInput style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              width: '80%'
            }} placeholder='You can type in me'
            onChangeText={newText => setText(newText)}
          ></TextInput>
        </View>
        <View  style={{
            width: '90%'
          }}>
          <Text>{text}</Text>
        </View>
        <View  style={{
            width: '90%'
          }}>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </View>
          <View>
            <Text style={{ fontFamily: 'Heebo-Regular', fontSize: 27 }}>שלום רב פונטים בעברית ץ</Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
