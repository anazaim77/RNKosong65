import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Paragraph, Title} from 'react-native-paper';
import ButtonCustom from '../../../../components/molecules/input/ButtonCustom';
import HeaderCompany from '../../../../components/organisms/jobdetail/HeaderCompany';
import JobSpecification from '../../../../components/organisms/jobdetail/JobSpec';
import MainContainers from '../../../templates/MainContainers';
import styles from './styles';

class JobDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  _goBack = () => {
    this.props.navigation.pop();
  };
  render() {
    return (
      <MainContainers style={styles.wrapper}>
        <Text style={styles.label}>Company</Text>
        <HeaderCompany />
        <Text style={styles.label}>Job Specification</Text>
        <JobSpecification />
      </MainContainers>
    );
  }
}

export default JobDetailPage;
