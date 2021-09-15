import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {colour} from '../../../../assets/styles';
import styles from './styles';

const CardJobList = ({item, index, onPress}) => {
  return (
    <Card onPress={onPress} style={{marginTop: 13, borderRadius: 8}}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={{uri: 'https://picsum.photos/700'}} />
        <View style={styles.boxDesc}>
          <Text style={styles.title}>Data Engineer</Text>
          <Text style={styles.text}>Align Technology Poland</Text>
          <Text style={styles.text}>Berlin</Text>
        </View>
        <IconButton
          icon={`chevron-right`}
          style={{marginRight: -18}}
          color={colour.TEXT.grey}
          size={30}
        />
      </View>
    </Card>
  );
};

export default CardJobList;
