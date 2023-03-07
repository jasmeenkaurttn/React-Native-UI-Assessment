import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import {
  addItemQuantity,
  deleteItem,
  removeItemQuantity,
} from '../redux/cartItems/action';

const CartItem = () => {
  // const cartItems = [
  //     {
  //       image: require('../assets/apple.png'),
  //       itemName: 'Apple',
  //       cost: '$' + 2.5,
  //       orderDate: 'Friday, 27 Jan',
  //       quantity: 5,
  //     },
  //     {
  //       image: require('../assets/orange.png'),
  //       itemName: 'Orange',
  //       cost: '$' + 2.5,
  //       orderDate: 'Friday, 27 Jan',
  //       quantity: 5,
  //     },
  //     {
  //       image: require('../assets/strawberry.png'),
  //       itemName: 'Strawberry',
  //       cost: '$' + 2.5,
  //       orderDate: 'Friday, 27 Jan',
  //       quantity: 5,
  //     },
  //   ];
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(addItemQuantity(id));
  };
  const handleDecrement = (id, quantity = 0) => {
    dispatch(removeItemQuantity(id, quantity));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <FlatList
      data={cartItems}
      renderItem={({ item, index }) => {
        return (
          <View style={{ flex: 1, padding: 10, alignItems: 'center' }} key={index}>
            <View style={styles.itemCard}>
              <View style={{ flex: 2, justifyContent: 'center' }}>
                <Image
                  style={{ height: 100, width: 100 }}
                  source={item.image}
                />
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'space-between',
                  height: 80,
                  marginTop: 15,
                }}>
                <View>
                  <Text>{item.itemName}</Text>
                  <Text>{item.cost + '/Kg'}</Text>
                </View>
                <View>
                  <Text>{item.orderDate}</Text>
                </View>
              </View>
              <View
                style={{
                  flex: 2,
                  justifyContent: 'space-between',
                  height: 80,
                  marginTop: 15,
                  alignItems: 'flex-end',
                }}>
                <View style={{ flexDirection: 'row', marginRight: 20 }}>
                  <TouchableOpacity onPress={() => handleIncrement(item.id)}>
                    <Image
                      style={{ marginTop: 1, marginRight: 5 }}
                      source={require('../assets/plusIcon.png')}
                    />
                  </TouchableOpacity>
                  <Text style={{ marginTop: 3, marginRight: 5 }}>
                    {item.quantity}
                  </Text>
                  <TouchableOpacity onPress={() => {
                    if (item.quantity === 1) {
                      handleDecrement(item.id, item.quantity);
                    } else {
                      handleDecrement(item.id);
                    }
                  }}>
                    <Image
                      style={{ marginTop: 3 }}
                      source={require('../assets/minusIcon.png')}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
                  <TouchableOpacity onPress={() => handleDelete(item.id)}>
                    <Image source={require('../assets/deleteIcon.png')} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        );
      }}
    />
  )
}
const styles = StyleSheet.create({
  itemCard: {
    width: '95%',
    height: 115,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    flexDirection: 'row',
    paddingLeft: 20,
  },
});
export default CartItem