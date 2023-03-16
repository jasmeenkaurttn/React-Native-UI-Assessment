import React, {useEffect} from 'react';

import {View, Text, Animated, StyleSheet} from 'react-native';

export default () => {
  const animatedValue = new Animated.Value(0);
  const fontSizeValue = new Animated.Value(0);

  useEffect(() => {
    Animated.parallel([
      Animated.loop(
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        {
          iterations: 6,
        }
      ).start(),

      Animated.timing(fontSizeValue, {
        toValue: 1,
        duration: 1000*3,
        useNativeDriver: true,
      }).start()
    ]);
  }, []);

  const rotatiionDegree = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return(
    <View style={{
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
        <Animated.Text
          style={[
            styles.text,{
              transform: [
                {rotate: rotatiionDegree},
                {scale: fontSizeValue},
              ]
            }
          ]}
        >
          Task1
        </Animated.Text>
    </View>
  )
}


const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontWeight: '500',
    fontSize: 60,
    textTransform: 'uppercase',
  }
})