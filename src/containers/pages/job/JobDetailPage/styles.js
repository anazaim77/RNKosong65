import {StyleSheet} from 'react-native';
import {colour, fonts, styling} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    // minHeight: styling.heightScreen,
    paddingHorizontal: 15,
    paddingTop: 13,
    // paddingTop: 150,
  },
  label: {
    ...fonts.med_10,
    fontSize: 16,
    color: colour.TEXT.primary,
    marginBottom: 8,
  },
});
export default styles;
