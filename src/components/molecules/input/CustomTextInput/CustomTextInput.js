import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import styles from './styles';

const CustomTextInput = ({label}) => {
  const [text, setText] = useState('');
  return (
    <TextInput
      label={label}
      value={text}
      mode={'outlined'}
      style={styles.wrapper}
      onChangeText={text => setText(text)}
    />
  );
};

export default CustomTextInput;
