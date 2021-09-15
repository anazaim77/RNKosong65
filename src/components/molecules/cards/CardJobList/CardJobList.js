import React from 'react';
import {View, Text, Image} from 'react-native';
import {Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {colour} from '../../../../assets/styles';
import styles from './styles';

const CardJobList = ({item, index, onPress}) => {
  const _onPress = () => {
    if (typeof onPress === 'function') onPress(item.id);
  };
  return (
    <Card onPress={_onPress} style={{marginTop: 13, borderRadius: 8}}>
      <View style={styles.wrapper}>
        <Image
          style={styles.img}
          // source={{uri: item?.company_logo ?? 'https://picsum.photos/700'}}
          source={{uri: 'https://picsum.photos/700'}}
        />
        <View style={styles.boxDesc}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.text}>{item?.company}</Text>
          <Text style={styles.text}>{item?.location}</Text>
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
