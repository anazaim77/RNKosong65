import {StyleSheet} from 'react-native';
import {styling} from '../../../../assets/styles';
import {FontFamily} from '../../../../assets/styles/fonts';

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxRow: {
    ...styling.row,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputLoc: {flex: 1, height: 30, marginTop: 0, marginLeft: 34},
});
export default styles;
