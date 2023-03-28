import {View, FlatList, StyleSheet, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchProducts,
  filterProductsByBrand,
  sortProductsByPriceAsc,
  sortProductsByPriceDesc,
} from '../Services/products/action';
import ProductCard from '../components/ProductCard';
// import Spinner from 'react-native-loading-spinner-overlay/lib';
import FilterPanel from '../components/FilterPanel';
import {isEmpty} from '../config/functions';
const Item = () => {
  const dispatch = useDispatch();
  const [isFilter, setIsFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [action, setAction] = useState();
  const products = useSelector(state => state.products.items);
  const filteredProducts = useSelector(state => state.products.filteredItems);
  const isLoading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    if (action != undefined) {
      setLoading(true);
      if (action === 'Low to High') {
        handlePriceLowToHigh();
        setLoading(false);
      } else if (action === 'High to Low') {
        handlePriceHighToLow();
        setLoading(false);
      } else {
        handleFilter(action);
        setLoading(false);
      }
    }
  }, [action]);

  const handlePriceHighToLow = () => {
    dispatch(sortProductsByPriceDesc());
    setIsFilter(!isFilter);
  };
  const handlePriceLowToHigh = () => {
    dispatch(sortProductsByPriceAsc());
    setIsFilter(!isFilter);
  };
  const handleFilter = brand => {
    dispatch(filterProductsByBrand(brand));
    setIsFilter(!isFilter);
  };
  return (
    <View style={{flex: 1}}>
      {/* <Spinner visible={isLoading} />
      <Spinner visible={loading} /> */}
      {(isLoading || loading) && <Text style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        Loading ....
      </Text>}
      {!isLoading && !isEmpty(products) && (
        <View style={{flex: 1}}>
          <FilterPanel handleAction={setAction} />
          <FlatList
            style={{marginVertical: 10}}
            data={!isEmpty(filteredProducts) ? filteredProducts : products}
            keyExtractor={item => item.id}
            extraData={isFilter}
            renderItem={({item, index}) => {
              return <ProductCard key={item.id} item={item} />;
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    marginTop: 10,
    padding: 10,
    marginLeft: 16,
    flexDirection: 'row',
    width: '45%',
    justifyContent: 'space-between',
  },
  button1: {
    borderRadius: 20,
    backgroundColor: 'white',
    elevation: 5,
    marginTop: 10,
    padding: 10,
    marginLeft: 16,
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
  },
});

export default Item;