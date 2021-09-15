import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {dummy_login} from '../../../containers/pages/auth/Login/LoginPage';
import ButtonCustom from '../../molecules/input/ButtonCustom';
import CustomTextInput from '../../molecules/input/CustomTextInput';

const FormLogin = ({onSubmit}) => {
  const [params, setParams] = useState({
    email: '',
    password: '',
  });

  const onChangeParams = (type, value) => {
    setParams(prev => ({...prev, [type]: value}));
  };

  return (
    <View>
      <CustomTextInput
        placeholder={'Email'}
        // value={params.email || dummy_login.email}
        value={params.email}
        onChangeText={text => onChangeParams('email', text)}
      />
      <CustomTextInput
        placeholder={'Password'}
        // value={params.password || dummy_login.password}
        value={params.password}
        onChangeText={text => onChangeParams('password', text)}
        secureTextEntry={true}
      />
      <ButtonCustom label={'Login'} onPress={() => onSubmit(params)} />
    </View>
  );
};

export default FormLogin;
