import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';

const MainContainers = ({children, noScroll, style}) => {
  return (
    <SafeAreaView>
      {noScroll ? (
        <View style={[styles.wrapper, style]}>{children}</View>
      ) : (
        <ScrollView contentContainerStyle={[styles.wrapper, style]}>
          {children}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default MainContainers;
