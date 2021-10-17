import React,{useState} from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import AppLoading from 'expo-app-loading'
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import * as Font from 'expo-font'

const fetchFonts=()=>{
  return Font.loadAsync({
    'nunito':require('./src/assets/fonts/Nunito-Regular.ttf'),
    'nunito-light':require('./src/assets/fonts/Nunito-Light.ttf'),
    'nunito-bold':require('./src/assets/fonts/Nunito-Bold.ttf')
  });
}




export default function App() {

  const [fontLoaded,setFontLoaded]=useState(false)

  if(!fontLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={()=>{setFontLoaded(true)}} onError={(err) => console.log(err)} />
    );
  }
   else{
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content'
          backgroundColor='#000000'
        />
        <RootNavigator />
      </View>
       </Provider>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
