import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styles from './styles';

const ButtonCustom = ({label}) => {
  return (
    <Button
      //   icon="camera"
      mode="contained"
      style={styles.wrapper}
      labelStyle={styles.text}
      onPress={() => console.log('Pressed')}>
      {label}
    </Button>
  );
};

export default ButtonCustom;
