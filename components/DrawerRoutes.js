import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/ProductDetail';
import Settings from '../screens/Settings';
import TabParent from '../screens/TabParent';
const Drawer = createDrawerNavigator();
const DrawerRoutes = (props) => {
  return (
    <Drawer.Navigator initialRouteName="HomeRoute">
      <Drawer.Screen name="Home" component={TabParent}  initialParams={{name:props.name}}
      options={{headerShown: false}}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default DrawerRoutes;
