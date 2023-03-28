import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../Services/productData/action';
import { Rating } from 'react-native-ratings';
// import Spinner from 'react-native-loading-spinner-overlay/lib';

const ProductDetail = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();

  const details = useSelector(state => state.productData.data);
  const loading = useSelector(state => state.productData.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData(id));
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerTitle: details.title,
    });
  }, [loading]);
  return (
    <View style={{ flex: 1 }}>
      {/* <Spinner visible={loading} /> */}
      {loading && 
      <Text style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        Loading ....
      </Text>}
      {!loading && (
        <>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {details?.image != undefined && (
              <Image
                style={{
                  width: 300,
                  height: 300,
                  resizeMode: 'contain',
                  marginTop: 20,
                }}
                source={{
                  uri: details?.image,
                }}
              />
            )}
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.fontStyle}>{details.title}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={[
                styles.fontStyle,
                { marginLeft: 10, fontSize: 25 },
              ]}>{`$ ${details.price}`}</Text>
            <Rating
              type="star"
              ratingCount={5}
              imageSize={20}
              style={{ marginTop: 27, marginLeft: 15 }}
              startingValue={details?.rating?.rate}
              readonly={true}></Rating>
            <Text style={{ fontWeight: 'bold', fontSize: 14, marginTop: 27 }}>
              {details?.rating?.count}
            </Text>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.fontStyle}>{details.description}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  fontStyle: { fontSize: 20, fontWeight: 'bold', marginTop: 20 },
});