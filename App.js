import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Hpage from  './hpage'
import Reco from  './reco'
import Mynotes from  './my notes'
import {  StyleSheet, Button, View, SafeAreaView, Text, Alert,TouchableOpacity,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
<Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Hpage}
          options={{ headerShown : false }}
        />
        <Stack.Screen name="Profile" component={Reco} />
        <Stack.Screen name="Page" component={Mynotes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;