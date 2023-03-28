import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Rating} from 'react-native-ratings';
import {useNavigation} from '@react-navigation/native';

const ProductCard = props => {
  const {item} = props;
  const id = item.id;
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', padding: 10}}>
      <TouchableOpacity
        style={styles.itemCard}
        onPress={() => navigation.navigate('ProductDetail', {id})}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{
                uri: item.image,
              }}
            />
          </View>
          <View style={{flex: 2}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.title}</Text>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={20}
                startingValue={item.rating.rate}
                readonly={true}></Rating>
              <Text style={{marginLeft: 5, fontWeight: 'bold', fontSize: 14}}>
                {item.rating.count}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 10}}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  marginTop: 15,
                }}>{`$ ${item.price}`}</Text>
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 18,
                  textTransform: 'capitalize',
                }}>{`  (${item.category})`}</Text>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemCard: {
    width: '95%',
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    paddingLeft: 20,
    flex: 1,
    padding: 10,
  },
});

export default ProductCard;