import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ChannelCard from './components/ChannelCard';
import store from './services/rootReducer'
const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <ChannelCard />
      </View>
    </Provider>    
  );
};
export default App;
