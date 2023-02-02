import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Pressable, Button, SafeAreaView, styleSheet, } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePicker from '@react-native-community/datetimepicker';

// const database = require

const HomeScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [sport, setSport] = useState('');
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date(Date.now()));

  // const phoneInput = useRef<PhoneInput>(null);

  const sports = [
    'Lacrosse',
    'Ice Hockey',
    'Basketball',
    'Soccer',
    'Field Hockey',
    'Track and Field',
    'Cross Country',
    'Softball',
    'Baseball',
    'Football',
    'Volleyball',
    'Tennis',
    'Golf',
    'Swimming',
    'Diving',
    'Gymnastics',
    'Boxing',
    'Wresting',
    'Bowling',
  ];

  const genders = [
    'Male',
    'Female',
  ]

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const showTimePicker = () => {
    setTimePicker(true);
  };

  const onDateSelected = (event, value) => {
    setDate(value);
    setDatePicker(false);
  };

  const onTimeSelected = (event, value) => {
    setTime(value);
    setTimePicker(false);
  };

  const onSelectSport = () => {
    if (!sport) {
      alert('Please select a sport.');
      return;
    }
    if (!phonenumber) {
      alert('Please enter a phone number');
      return;
    }
    if (!dob) {
      alert('Please enter a date of birth in format MM-DD-YYYY.');
      return;
    }
    if (!gender) {
      alert('Please enter a gender.');
      return;
    }

    // alert(sport + ' Added!');
    navigation.navigate('Address');
  }

  return (
    <View style={styles.page}>
      <SelectDropdown
        data={sports}
        defaultButtonText={'Select Sport'}
        onSelect={(selectedItem, index) => {
          setSport(selectedItem);
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
      <PhoneInput
        defaultValue={phonenumber}
        defaultCode='US'
        onChangeText={text => setPhonenumber(text)}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        containerStyle={styles.dropdownBtnStyle}
        textContainerStyle={styles.dropdownBtnTxtStyle}
      />
      {datePicker && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onDateSelected}
        />
      )}
      {!datePicker && (
        <View style={{ margin: 10 }}>
          <Pressable style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>Select Date</Text>
        </Pressable>
        </View>
      )}
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={date.toLocaleDateString()}
        />
      </View>
      <SelectDropdown
        data={genders}
        defaultButtonText={'Select Gender'}
        onSelect={(selectedItem, index) => {
          setGender(selectedItem);
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
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={() => {
          navigation.navigate('Address')
        }}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreen;