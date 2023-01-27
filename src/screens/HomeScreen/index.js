import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';

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
  const phoneInput = useRef<PhoneInput>(null);

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
      ref={phoneInput}
    />
    <TextInput
      value={dob}
      onChangeText={value => setDob(value)}
      style={styles.dob}
      clearButtonMode={'while-editing'}
      placeholder={'Date of birth'}
      placeholderTextColor={'grey'}
    />
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
        const checkValid = phoneInput.current?.isValidNumber(phonenumber);
        setShowMessage(true);
        setValid(checkValid ? checkValid : false);
      }}>
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </View>
  </View>
);
}

export default HomeScreen;