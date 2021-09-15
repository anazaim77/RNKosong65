import React from 'react';
import {Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './styles';

const Row = ({title, desc}) => (
  <React.Fragment>
    <Text style={styles.text}>{title}</Text>
    <Text style={styles.textLink}>{desc}</Text>
  </React.Fragment>
);

const JobSpecification = ({data}) => {
  return (
    <Card style={{borderRadius: 8, marginBottom: 13}}>
      <View style={styles.wrapper}>
        <Row title={'Title'} desc={data?.title} />
        <Row
          title={'Full Time'}
          desc={data?.type == 'Full Time' ? 'Yes' : 'No'}
        />
        <Row title={'Description'} desc={data?.description} />
      </View>
    </Card>
  );
};

export default JobSpecification;
