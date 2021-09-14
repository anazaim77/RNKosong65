import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {
  login_sg,
  set_login,
  set_logout,
} from '../../../../configs/redux/actions/authActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 1,
      // min: 1,
      // max: 1,
    };
  }

  _click = () => {
    const {isLoggedIn, login_sg, set_logout, set_login} = this.props;
    if (isLoggedIn) set_logout();
    else set_login();
    this.setState(prev => ({
      ...prev,
      count: 2,
    }));
    login_sg({data1: 1, data2: 2});
  };

  render() {
    const {isLoggedIn} = this.props;

    // console.log(`this.props`, this.props);
    return (
      <View>
        <Text> LoginPage </Text>
        <Divider />
        <Icon name={'home'} />
        <Button title={'click me'} onPress={this._click} />
        <Text>isLoggedIn : {isLoggedIn.toString()}</Text>
      </View>
    );
  }
}
const mapState = ({authReducer}) => ({
  isLoggedIn: authReducer.isLoggedIn,
});

export default connect(mapState, {set_logout, login_sg, set_login})(LoginPage);
