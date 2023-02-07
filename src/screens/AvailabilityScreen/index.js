import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';

const AvailabilityScreen = () => {

  const navigation = useNavigation();

  const [date, setDate] = useState('');

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const onAddDates = () => {
    if (!date){
      alert('Please enter a date.');
      return;
    }

  }

    return (
        <View style={styles.page}> 
          <View style={styles.row}>
      <SelectDropdown
        data={days}
        defaultButtonText={'Availability'}
        onSelect={(selectedItem, index) => {
          setDate(selectedItem);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
      </View>
        </View>
      );
}

export default AvailabilityScreen;