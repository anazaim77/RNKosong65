import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Card, IconButton, Paragraph, Title} from 'react-native-paper';
import {colour} from '../../../../assets/styles';
import styles from './styles';

const Row = ({title, desc}) => (
  <React.Fragment>
    <Text style={styles.text}>Wraclow</Text>
    <Text style={styles.textLink}>Go To Website</Text>
    <Text>{desc}</Text>
  </React.Fragment>
);

const JobSpecification = () => {
  return (
    <Card style={{borderRadius: 8, marginBottom: 13}}>
      <View style={styles.wrapper}>
        <Row />
        <Row />
        <Row />
      </View>
    </Card>
  );
};

export default JobSpecification;
