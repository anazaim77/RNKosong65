import React, {Component, createContext} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import HeaderCompany from '../../../../components/organisms/jobdetail/HeaderCompany';
import JobSpecification from '../../../../components/organisms/jobdetail/JobSpec';
import {fetch_detail_sg} from '../../../../configs/redux/actions/jobActions';
import MainContainers from '../../../templates/MainContainers';
import styles from './styles';

class JobDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    console.log(`this.props`, this.props);
    this.handleFetch();
  };

  handleFetch = () => {
    const {fetch_detail_sg, route} = this.props;
    fetch_detail_sg({
      id: route?.params?.id,
    });
  };

  _goBack = () => {
    this.props.navigation.pop();
  };
  render() {
    const {current} = this.props;
    console.log(`current`, current);
    return (
      <MainContainers style={styles.wrapper}>
        <Text style={styles.label}>Company</Text>
        <HeaderCompany data={current} />
        <Text style={styles.label}>Job Specification</Text>
        <JobSpecification data={current} />
      </MainContainers>
    );
  }
}

const mapState = ({jobReducer}) => ({
  current: jobReducer.current,
});

const mapDispatch = {
  fetch_detail_sg,
};

export default connect(mapState, mapDispatch)(JobDetailPage);
