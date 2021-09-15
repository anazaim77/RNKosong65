import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ButtonCustom from '../../../../components/molecules/input/ButtonCustom';
import HeaderSearchFilter from '../../../../components/organisms/joblist/HeaderSearchFilter';
import screens from '../../../../configs/routes/screens';
import MainContainers from '../../../templates/MainContainers';

class JobListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goTo = screen => {
    this.props.navigation.push(screen);
  };

  render() {
    return (
      <MainContainers noScroll={true}>
        <View>
          <HeaderSearchFilter />
        </View>
        <ButtonCustom
          label={'Detail'}
          onPress={() => this.goTo(screens.detail_job)}
        />
      </MainContainers>
    );
  }
}

export default JobListPage;
