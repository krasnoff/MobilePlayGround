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
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import { useFonts } from 'expo-font';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { FAB } from '@rneui/themed';


function HomeScreen({ navigation }: any): JSX.Element {
  const [text, setText] = useState<string>('');
  const [fontsLoaded] = useFonts({
    'Heebo-Regular': require('../../assets/fonts/heebo/Heebo-Regular.ttf'),
  });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,

  };

  return (
    <View style={[
      styles.container,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
      },
    ]}>
      <StatusBar
        //barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        //backgroundColor={backgroundStyle.backgroundColor}
        backgroundColor='#f4511e'
        barStyle="light-content"
      />
      <View style={{
        flex: 1,
        flexDirection: 'column',
      }}>
        <View>
          <TextInput style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            width: '80%'
          }} placeholder='You can type in me'
            onChangeText={newText => setText(newText)}
          ></TextInput>
        </View>
        <View>
          <Text>{text}</Text>
        </View>
        <View>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
        <View>
          <Text style={{ fontFamily: 'Heebo-Regular', fontSize: 27 }}>שלום רב פונטים בעברית ץ</Text>
        </View>
      </View>
      <View style={{
        flex: 1,
      }}>
        <FAB
          visible={true}
          color="green"
          placement='left'
        >+</FAB>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
