import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomMainTab from '../../containers/pages/MainTab/BottomMainTab';
import screenProps from './screenProps';
import screens from './screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={screens.login}>
      <Stack.Screen name={screens.mainMenu} component={BottomMainTab} />
      {screenProps.map((el, id) => {
        return <Stack.Screen key={id} {...el} />;
      })}
      {/* <Stack.Screen name="Home2" component={Home2Screen} /> */}
    </Stack.Navigator>
  );
};

export default AppNavigator;
