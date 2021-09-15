import React, {createRef, useEffect, useRef} from 'react';
import {
  FlatList,
  RefreshControl,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {colour, styling} from '../../../assets/styles';
import * as Components from '../../molecules/cards';

const _renderCard = ({item, index, component, itemProps}) => {
  const Component = Components[component];
  return (
    <Component
      id={index}
      key={index}
      item={item}
      index={index}
      {...itemProps}
    />
  );
};

export const Footer = ({isLast, loading}) => (
  <View style={styles.footerBox}>
    {isLast ? (
      <Entypo name={'dot-single'} color={colour.PRIMARY} size={20} />
    ) : loading ? (
      <ActivityIndicator size={'small'} color={colour.PRIMARY} />
    ) : null}
  </View>
);

const ScrollVertical = ({
  data,
  component,
  render,
  contentContainerStyle,
  itemProps,
  horizontal,
  style,
  refreshing,
  onRefresh,
  loadMore,
  isLoadingMore,
  isLast,
  // initFunc,
  ...other
}) => {
  console.log(`isLoadingMore`, isLoadingMore);
  let onScroll = useRef();
  useEffect(() => {
    // if (typeof initFunc === 'function') initFunc();
    onScroll.current = false;
  }, []);
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={others => _renderCard({component, itemProps, ...others})}
      refreshControl={
        onRefresh && (
          <RefreshControl
            colors={[colour.PRIMARY]}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        )
      }
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={[contentContainerStyle]}
      style={style}
      showsVerticalScrollIndicator={false}
      legacyImplementation={false}
      onEndReachedThreshold={0.1}
      onMomentumScrollEnd={() => {
        if (onScroll.current === true) {
          // console.log('masuk sini');
          loadMore();
        }
        onScroll.current = false;
      }}
      onEndReached={() => {
        onScroll.current = true;
      }}
      ListFooterComponent={<Footer isLast={isLast} loading={isLoadingMore} />}
      {...other}
    />
  );
};
ScrollVertical.defaultProps = {
  data: [],
  itemProps: null,
  onRefresh: () => console.log('onRefresh belum diset'),
  loadMore: () => console.log('loadMore belum diset'),
  refreshing: false,
};

const styles = StyleSheet.create({
  horizontal: {
    ...styling.row,
    alignItems: 'flex-start',
  },
  footerBox: {
    ...styling.itemCentered,
  },
});

export default ScrollVertical;
