import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {colour} from '../../../../assets/styles';
import styles from './styles';

const HeaderCompany = ({}) => {
  return (
    <Card style={{borderRadius: 8, marginBottom: 13}}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={{uri: 'https://picsum.photos/700'}} />
        <View style={styles.boxDesc}>
          <Text style={styles.title}>Align Technology Poland</Text>
          <Text style={styles.text}>Wraclow</Text>
          <Text style={styles.textLink}>Go To Website</Text>
        </View>
      </View>
    </Card>
  );
};

export default HeaderCompany;
