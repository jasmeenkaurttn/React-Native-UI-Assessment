import 'react-native-gesture-handler';
import React from 'react';
import {
  View
} from 'react-native';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './redux/rootReducer';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Cart />
      </View>
    </Provider>
  );
};
export default App;
