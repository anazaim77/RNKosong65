import React from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import {colour, styling} from '../../../assets/styles';

const ScrollRefresh = ({children, refreshing, onRefresh, style, ...other}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={[{flex: 1, height: styling.heightScreen}, style]}
      refreshControl={
        <RefreshControl
          colors={[colour.PRIMARY]}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
      {...other}>
      {children}
    </ScrollView>
  );
};

ScrollRefresh.defaultProps = {
  onRefresh: () => console.log('onRefresh belum diset'),
  refreshing: false,
};

export default ScrollRefresh;
