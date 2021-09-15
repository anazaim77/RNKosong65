import {StyleSheet} from 'react-native';
import {colour, fonts, styling} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    padding: 13,
  },
  img: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  boxDesc: {
    marginLeft: 21,
    flex: 1,
    height: '100%',
    // backgroundColor: 'red',
  },
  title: {
    ...fonts.bold_16,
    color: colour.TEXT.primary,
  },
  text: {
    ...fonts.semi_12,
    color: colour.TEXT.grey,
  },
  textLink: {
    ...fonts.med_12,
    color: colour.TEXT.primary,
    marginBottom: 8,
  },
});
export default styles;
