import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {
  set_login,
  set_logout,
} from '../../../../configs/redux/actions/authActions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 1,
    };
  }

  _click = () => {
    const {isLoggedIn, set_logout, set_login} = this.props;
    if (isLoggedIn) set_logout();
    else set_login();
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

export default connect(mapState, {set_logout, set_login})(LoginPage);
