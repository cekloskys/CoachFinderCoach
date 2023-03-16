import { TextInput, Pressable, Text, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { useState } from 'react';
import styles from './styles';
import PhoneInput from 'react-native-phone-number-input';
import React, { useRef } from 'react';

const validator = require('validator');

const UsaStates = require('usa-states').UsaStates;

const ProfileScreen = () => {

  const [phonenumber, setPhonenumber] = useState('');

  const phoneInput = useRef(null);

  const usStates = new UsaStates();
  const statesNames = usStates.arrayOf('names');

  const [fullName, setFullName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [email, setEmail] = useState('');

  const Validation = () => {
    if (!fullName) {
      alert('Please enter your fullname.');
      return
    }
    if (!street) {
      alert('Please enter your street.');
      return
    }
    if (!city) {
      alert('Please enter your city.');
      return
    }
    if (!state) {
      alert('Please enter your state.');
      return
    }
    if (!zip) {
      alert('Please enter your zip code.');
      return
    }
    if (!email || !validator.isEmail(email)) {
      alert('Please enter a valid email.');
      return
    }
    if (!phoneInput.current?.isValidNumber(phonenumber)) {
      alert('Please enter a valid phone number.');
      return;
    }
    alert('Profile saved.');
  }

  return (
    <ScrollView style={styles.page}>
      <TextInput
        value={fullName}
        onChangeText={value => setFullName(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Full Name"}
        placeholderTextColor={'lightgrey'}
        keyboardType='name-phone-pad'
      />
      <TextInput
        value={street}
        onChangeText={value => setStreet(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Street"}
        placeholderTextColor={'lightgrey'}
      />
      <TextInput
        value={city}
        onChangeText={value => setCity(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter City"}
        placeholderTextColor={'lightgrey'}
      />
      <SelectDropdown
        data={statesNames}
        defaultValue={state}
        defaultButtonText={'Select State'}
        onSelect={(selectedItem, index) => {
          setState(selectedItem);
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
      <TextInput
        value={zip}
        onChangeText={value => setZip(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Zip Code"}
        placeholderTextColor={'lightgrey'}
        keyboardType='number-pad'
      />
      <TextInput
        value={email}
        onChangeText={value => setEmail(value)}
        style={styles.input}
        clearButtonMode={'while-editing'} 
        placeholder={"Enter Email"}
        placeholderTextColor={'lightgrey'}
        keyboardType='email-address'
      />
      <PhoneInput
        ref={phoneInput}
        defaultValue={phonenumber}
        defaultCode='US'
        onChangeText={text => setPhonenumber(text)}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        containerStyle={styles.dropdownBtnStyle}
        textContainerStyle={styles.dropdownBtnTxtStyle}
      />
      <Pressable
        style={styles.button} onPress={Validation}>
        <Text style={styles.buttonText}> Submit </Text>
      </Pressable>
      <Pressable
        style={styles.button} onPress={Validation}>
        <Text style={styles.buttonText}> Log Out </Text>
      </Pressable>
    </ScrollView>
  );
}

export default ProfileScreen;