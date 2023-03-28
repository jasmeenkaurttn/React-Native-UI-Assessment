import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const FilterButton = props => {
  const {style, onPress, text, img, imageStyle} = props;
  return (
    <TouchableOpacity style={style} onPress={() => onPress()}>
      <Text
        style={{
          justifyContent: 'center',
          fontSize: 15,
          fontWeight: 'bold',
          marginTop: 6,
          textTransform: 'capitalize',
        }}>
        {text}
      </Text>
      <Image style={imageStyle} source={img} />
    </TouchableOpacity>
  );
};

export default FilterButton;