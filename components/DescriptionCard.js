import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Spinner from 'react-native-loading-spinner-overlay/lib';
const DescriptionCard = props => {
  const {channelData} = props;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={{flex: 1}}>
      <View style={{height: '50%'}}>
        <Spinner visible={isLoading} />
        <Video
          controls
          resizeMode="cover"
          source={{
            uri: channelData?.detail?.playUrl,
            type: 'm3u8',
          }}
          onLoad={() => setIsLoading(false)}
          onLoadStart={() => setIsLoading(true)}
          style={{flex: 1}}
        />
      </View>
      <ScrollView>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <View style={{width: '90%'}}>
            <Text style={{fontSize: 30}}>{channelData.meta.title}</Text>
            <Text style={{fontSize: 15, marginTop: 5}}>
              {channelData.meta.description}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DescriptionCard;