import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Item from './src/screens/Item';
import Item from './screens/Item';
import {Provider} from 'react-redux';
// import store from './src/Services/rootReducer';
import store from './Services/rootReducer';
import ProductDetail from './screens/ProductDetail';
const App = () => {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Item'>
      <Stack.Screen
          name="Item"
          component={Item}
          options={{headerTitleAlign: 'center'}}
        />
      <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
        />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;