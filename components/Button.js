import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import FacebookIcon from '../assets/fbIcon.png';
import GoogleIcon from '../assets/googleIcon.png';

export default function Button(props) {
  const {
    marginVertical,
    width,
    backgroundColor,
    alignItems,
    justifyContent,
    height,
    borderRadius,
    fontSize,
    color,
    fontWeight,
    flexDirection,
    isImage,
    imgheight,
  } = props;
  const styles = StyleSheet.create({
    button: {
      marginVertical: marginVertical === null ? '' : marginVertical,
      width: width === null ? '' : width,
      backgroundColor: backgroundColor === null ? '' : backgroundColor,
      alignItems: alignItems === null ? '' : alignItems,
      justifyContent: justifyContent === null ? '' : justifyContent,
      height: height === null ? '' : height,
      borderRadius: borderRadius === null ? '' : borderRadius,
      flexDirection: flexDirection === null ? '' : flexDirection,
    },
    buttonText: {
      fontSize: fontSize,
      color: color,
      fontWeight: fontWeight,
    },
  });
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      {isImage == 'facebook' && (
        <>
          <Image
            style={{height: imgheight === null ? '' : imgheight}}
            source={FacebookIcon}
          />
        </>
      )}
      {isImage == 'google' && (
        <>
          <Image
            style={{height: imgheight === null ? '' : imgheight}}
            source={GoogleIcon}
          />
        </>
      )}
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  );
}
