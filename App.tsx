/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
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
        }} placeholder='You can type in me'></TextInput>
      </View>
    </ScrollView>
    
  );
}

export default App;
