import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


import FirstPage from './screen/FirstPage'
import SecondPage from './screen/SecondPage'


import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();






const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='FirstPage'
      screenOptions={{headerShown:false}}>
        <Stack.Screen name="FirstPage" component={FirstPage} />
         <Stack.Screen name="SecondPage" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})