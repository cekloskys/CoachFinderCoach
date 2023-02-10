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
  const [times, setTimes] = useState([]);


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

  const timeOptions = [
    {
      id: '8',
      name: '8am',
    },
    {
      id: '9',
      name: '9am',
    },
    {
      id: '10',
      name: '10am',
    },
    {
      id: '11',
      name: '11am',
    },
    {
      id: '12',
      name: '12pm',
    },
    {
      id: '13',
      name: '1pm',
    },
    {
      id: '14',
      name: '2pm',
    },
    {
      id: '15',
      name: '3pm',
    },
    {
      id: '16',
      name: '4pm',
    },
    {
      id: '17',
      name: '5pm',
    },
    {
      id: '18',
      name: '6pm',
    },
    {
      id: '19',
      name: '7pm',
    },
    {
      id: '20',
      name: '8pm',
    },
  ];



  const onAddDates = () => {
    if (days.length == 0) {
      alert('Please select days.');
      return;
    }
    if (times.length == 0) {
      alert('Please select times.');
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
          selectText="Pick Days"
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
        <MultiSelect
          items={timeOptions}
          uniqueKey='id'
          onSelectedItemsChange={(text) => setTimes(text)}
          selectedItems={times}
          selectText="Pick Times"
          searchInputPlaceholderText="Select Times"
          onChangeInput={(text) => setTimes(text)}
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
      <Pressable style={styles.button} onPress={onAddDates}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
    </View>
  );
}

export default AvailabilityScreen;