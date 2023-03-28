import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearAllFilter} from '../Services/products/action';
import FilterButton from './FilterButton';
import Modal from './ModalParent';

const FilterPanel = props => {
  const dispatch = useDispatch();
  const {handleAction} = props;
  const categories = useSelector(state => state.products.category);
  const [isOpen, setIsOpen] = useState(false);
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [data, setData] = useState();
  const [item, setItem] = useState('');
  const [filterSelect, setFilterSelect] = useState(false);
  const priceData = ['Low to High', 'High to Low'];
  useEffect(() => {
    setIsOpen(false);
    handleAction(item);
    if (item === 'High to Low' || item === 'Low to High') {
      setPrice(item);
    } else {
      setBrand(item);
    }
  }, [filterSelect]);
  return (
    <View>
      <View style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <FilterButton
            style={styles.button}
            onPress={() => {
              setData(priceData);
              setIsOpen(true);
            }}
            text={price != '' ? price : 'Sort By Price'}
            img={require('../assets/sort.png')}
            imageStyle={{}}
          />
          <FilterButton
            style={styles.button}
            onPress={() => {
              setData(categories);
              setIsOpen(true);
            }}
            text={brand != '' ? brand : 'Filter By Brand'}
            img={require('../assets/filter.png')}
            imageStyle={{marginTop: 2, height: 30, width: 30}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <FilterButton
            style={styles.button1}
            onPress={() => {
              dispatch(clearAllFilter());
              setBrand('');
              setPrice('');
            }}
            text={'Clear Brand Filter'}
            img={require('../assets/delete.png')}
            imageStyle={{marginTop: 2, height: 30, width: 30, marginLeft: 25}}
          />
        </View>
      </View>

      <Modal
        visible={isOpen}
        setIsVisible={setIsOpen}
        data={data}
        handleFilter={setItem}
        filterSelect={filterSelect}
        handleFilterSelect={setFilterSelect}
      />
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

export default FilterPanel;