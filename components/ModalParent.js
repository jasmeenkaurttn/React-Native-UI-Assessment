import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
const ModalView = props => {
  const {
    visible,
    setIsVisible,
    data,
    handleFilter,
    filterSelect,
    handleFilterSelect,
  } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setIsVisible(false);
      }}>
      <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              width: '50%',
              borderRadius: 10,
              backgroundColor: 'white',
            }}>
            <FlatList
              style={{marginVertical: 10}}
              data={data}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    style={{
                      width: '100%',
                      borderBottomWidth: 1,
                      justifyContent: 'center',
                      height: 45,
                    }}
                    onPress={() => {
                      handleFilter(item);
                      setIsVisible(false);
                      handleFilterSelect(!filterSelect);
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginLeft: 10,
                        textTransform: 'capitalize',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalView;