import React from 'react';
import {View, Text, Image, Linking} from 'react-native';
import {Button, Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {colour} from '../../../../assets/styles';
import styles from './styles';

const HeaderCompany = ({data}) => {
  const openLink = () => {
    Linking.openURL(data?.company_url);
  };
  return (
    <Card style={{borderRadius: 8, marginBottom: 13}}>
      <View style={styles.wrapper}>
        <Image style={styles.img} source={{uri: 'https://picsum.photos/700'}} />
        <View style={styles.boxDesc}>
          <Text style={styles.title}>{data?.company}</Text>
          <Text style={styles.text}>{data?.location}</Text>
          <Text style={styles.textLink} onPress={openLink}>
            Go To Website
          </Text>
        </View>
      </View>
    </Card>
  );
};

export default HeaderCompany;
