import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ButtonCustom from '../../../../components/molecules/input/ButtonCustom';
import MainContainers from '../../../templates/MainContainers';

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
      <MainContainers>
        <View>
          <Text> JobDetailPage </Text>
        </View>
        <ButtonCustom label={'Back'} onPress={() => this._goBack()} />
      </MainContainers>
    );
  }
}

export default JobDetailPage;
