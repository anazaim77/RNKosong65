import React, {Component} from 'react';
import {Alert, Text} from 'react-native';
import {connect} from 'react-redux';
import FormLogin from '../../../../components/organisms/FormLogin/FormLogin';
import {
  login_sg,
  set_login,
  set_logout,
} from '../../../../configs/redux/actions/authActions';
import screens from '../../../../configs/routes/screens';
import MainContainers from '../../../templates/MainContainers';
import styles from './styles';

export const dummy_login = {
  email: 'test@mail.id',
  password: 'asd123',
};

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _login = data => {
    // console.log(`data`, data);
    // if (
    //   data.email.toLowerCase() !== dummy_login.email.toLowerCase() ||
    //   data.password.toLowerCase() !== dummy_login.password.toLowerCase()
    // ) {
    //   Alert.alert('Peringatan', 'email atau password salah');
    // } else {
    this.props.navigation.replace(screens.job_list);
    // }
  };

  render() {
    return (
      <MainContainers style={styles.wrapper}>
        <Text style={styles.textGreeting}>Hey, </Text>
        <Text style={styles.textGreeting}>Login Now. </Text>
        <FormLogin onSubmit={this._login} />
      </MainContainers>
    );
  }
}
const mapState = ({authReducer}) => ({
  isLoggedIn: authReducer.isLoggedIn,
});

export default connect(mapState, {set_logout, login_sg, set_login})(LoginPage);
