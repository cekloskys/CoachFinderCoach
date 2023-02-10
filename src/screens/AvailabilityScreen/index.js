import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import React, { useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import MultiSelect from 'react-native-multiple-select';

const AvailabilityScreen = () => {

  const navigation = useNavigation();

  const [date, setDate] = useState('');
  const [days, setDays] = useState([]);


  const dayOptions = [
    {
      id: '1',
      name: 'Monday',
    },
    {
      id: '2',
      name: 'Tuesday',
    },
    {
      id: '3',
      name: 'Wednesday',
    },
    {
      id: '4',
      name: 'Thursday',
    },
    {
      id: '5',
      name: 'Friday',
    },
    {
      id: '6',
      name: 'Saturday',
    },
    {
      id: '7',
      name: 'Sunday',
    },
  ];



  const onAddDates = () => {
    if (!date) {
      alert('Please enter a date.');
      return;
    }

  }

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <MultiSelect
          items={dayOptions}
          uniqueKey='id'
          onSelectedItemsChange={(text) => setDays(text)}
          selectedItems={days}
          selectText="Pick Items"
          searchInputPlaceholderText="Select Days"
          onChangeInput={(text) => setDays(text)}
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          searchInputStyle={{
            color: 'black',

          }}
          styleMainWrapper={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'lightgrey',
            backgroundColor: 'white',
          }}
          styleDropdownMenu={{
            borderColor: 'white',

          }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
      </View>
    </View>
  );
}

export default AvailabilityScreen;