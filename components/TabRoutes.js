import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/ProductDetail';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();
const TabRoutes = (props) => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home', headerTitleAlign: 'center' }}
        initialParams={{ name: props.name }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default TabRoutes