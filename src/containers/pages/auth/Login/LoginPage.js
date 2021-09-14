import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> LoginPage </Text>
        <Divider />
        <Icon name={'home'} />
      </View>
    );
  }
}

export default LoginPage;
