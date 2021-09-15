import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  Card,
  IconButton,
  Paragraph,
  Searchbar,
  Switch,
  Title,
} from 'react-native-paper';
import {colour, styling} from '../../../../assets/styles';
import ButtonCustom from '../../../molecules/input/ButtonCustom';
import CustomTextInput from '../../../molecules/input/CustomTextInput';
import styles from './styles';

const HeaderSearchFilter = ({onSubmit}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [open, setOpen] = useState(false);
  const _handleOpen = () => {
    setOpen(prev => !prev);
  };
  const [params, setParams] = useState({
    description: '',
    location: '',
    full_time: false,
  });

  const onChangeParams = (type, value) => {
    setParams(prev => ({...prev, [type]: value}));
  };
  const _handleSubmit = () => {
    console.log(`params`, params);
    setParams({
      description: '',
      location: '',
      full_time: false,
    });
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.searchBox}>
        <Searchbar
          style={{borderRadius: 25, flex: 1}}
          placeholder="Search"
          onChangeText={query => onChangeParams('description', query)}
          value={params.description}
        />
        <IconButton
          icon={`chevron-${open ? 'up' : 'down'}`}
          color={colour.TEXT.grey}
          size={30}
          onPress={_handleOpen}
        />
      </View>
      {open && (
        <Card>
          <Card.Content>
            <View style={styles.boxRow}>
              <Paragraph>Fulltime</Paragraph>
              <Switch
                value={params.full_time}
                onValueChange={() =>
                  onChangeParams('full_time', !params.full_time)
                }
              />
            </View>
            <View style={styles.boxRow}>
              <Paragraph>Location</Paragraph>
              <CustomTextInput
                placeholder={'berlin'}
                value={params.location}
                onChangeText={text => onChangeParams('location', text)}
                style={styles.inputLoc}
              />
            </View>
            <View style={[styles.boxRow, {justifyContent: 'flex-end'}]}>
              <ButtonCustom
                label={'Apply Filter'}
                labelStyle={{fontSize: 12, paddingVertical: 0}}
                onPress={_handleSubmit}
              />
            </View>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

export default HeaderSearchFilter;
