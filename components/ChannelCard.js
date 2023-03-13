import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React from 'react';
import DescriptionCard from './DescriptionCard';
import { selectChannel } from '../services/channelService/action';

const ChannelCard = () => {
  const channelsData = useSelector((state) => state.channelReducer.channelData);
  const selectedChannel = useSelector((state) => state.channelReducer.currentChannelData);
  const dispatch = useDispatch();


  const handleSelectedChannel=(id)=>{
    dispatch(selectChannel(id));
  }

  return (
    <View style={{flex:1}}>
        <DescriptionCard channelData={selectedChannel}/>
      <View style={{flex:1,paddingVertical:10}}>
        <Text style={{fontSize:30,marginLeft:15}}>Channels List</Text>
      <FlatList
      style={{marginVertical:20}}
        data={channelsData}
        renderItem={({item, index}) => {
          return (
            <View style={{flex: 1, padding: 10, alignItems: 'center'}}>
              <TouchableOpacity style={styles.itemCard} onPress={()=>handleSelectedChannel(item.meta.id)}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                  <Text style={{fontSize:20}}>{item.meta.title}</Text>
                </View>
            </TouchableOpacity>
            </View>
          );
        }}
      />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemCard: {
    width: '95%',
    height: 60,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
    paddingLeft: 20,
  },
});
export default ChannelCard;