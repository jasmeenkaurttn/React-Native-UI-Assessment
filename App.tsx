import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import Settings from './screens/Settings';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Parent from './screens/Parent';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Settings"
          component={Settings}
          options={{title:"Settings"}}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
