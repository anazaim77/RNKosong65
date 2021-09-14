import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './configs/routes/AppNavigator';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => props.navigation.push('Home2')}
        title={'home 2'}></Button>
    </View>
  );
}
function Home2Screen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home2 Screen</Text>
    </View>
  );
}

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={Home2Screen} />
      </Stack.Navigator> */}
      <AppNavigator />
    </NavigationContainer>
  );
}
