import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Summary = () => {
  const [subTotal,setSubTotal]=useState(0);
  const cartItems=useSelector(state=>state.cartItems);
  useEffect(()=>{
    let apple=cartItems[0]?cartItems[0]?.quantity:0;
    let orange=cartItems[1]?cartItems[1]?.quantity:0;
    let strawberry=cartItems[2]?cartItems[2]?.quantity:0;
    setSubTotal(apple+orange+strawberry)
  },[cartItems])
  return (
    <View style={styles.card}>
      <View
        style={styles.textStyle}>
        <Text style={styles.fontStyle}>Delivery Charges</Text>
        <Text style={styles.fontStyle}>{subTotal?'$18.00':'$0.00'}</Text>
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.fontStyle}>Sub Total</Text>
        <Text style={styles.fontStyle}>${(subTotal*2.5).toFixed(2)}</Text>
      </View>
      <View style={styles.textStyle}>
        <Text style={styles.fontStyle}>Total</Text>
        <Text style={styles.fontStyle}>{subTotal?'$'+((subTotal*2.5)+18).toFixed(2):'$0.00'}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    width: '90%',
    elevation: 5,
    borderRadius: 25,
    height: 230,
    padding:20
  },
  textStyle:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  fontStyle:{
    fontSize:17,
    fontWeight:'bold'
  }
});

export default Summary;