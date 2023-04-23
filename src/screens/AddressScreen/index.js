import React, { useState, useEffect, useRef } from 'react';
import { Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { useRoute } from '@react-navigation/native';
import { useCoachContext } from '../../context/CoachContext';
import { useAuthContext } from '../../context/AuthContext';
import PhoneInput from 'react-native-phone-number-input'; 

const UsaStates = require('usa-states').UsaStates;

const validator = require('validator');

const AddressScreen = () => {

  const { createdCoach, coachDBUser } = useCoachContext();
  const { authUser } = useAuthContext();

  const navigation = useNavigation();
  
  const statesNames = [ 'Bucks', 'Chester', 'Delaware', 'Montgomery', 'Philadelphia'];

  const [address, setAddress] = useState( coachDBUser?.streetAddress || createdCoach?.streetAddress || '');
  const [city, setCity] = useState(coachDBUser?.city || createdCoach?.city || '');
  const [zip, setZip] = useState(coachDBUser?.zip || createdCoach?.zip || '');
  const [state, setState] = useState(coachDBUser?.state || createdCoach?.state || '');
  const [email, setEmail] = useState(authUser?.attributes?.email || coachDBUser?.email || createdCoach?.email || '');
  const [phonenumber, setPhonenumber] = useState(coachDBUser?.phoneNbr || createdCoach?.phoneNbr || '');
  const [formattedValue, setFormattedValue] = useState("");

  const phoneInput = useRef(null);

  const route = useRoute();

  const sport = route.params?.sport;
  const position = route.params?.position;
  const name = route.params?.name;
  const date = route.params?.date;
  const image = route.params?.image;

  const onAddressAdd = () => {

    if (!address) {
      alert('Please enter your street address.');
      return;
    }
    if (!city) {
      alert('Please enter your city.');
      return;
    }
    if (!state) {
      alert('Please select your county.');
      return;
    }
    if (!zip) {
      alert('Please enter your zipcode.');
      return;
    }
    if (!email || !validator.isEmail(email)) {
      alert('Please enter your valid email address.');
      return;
    }
    if (!phoneInput.current?.isValidNumber(phonenumber)) {
      alert('Please enter a valid phone number.');
      return;
    }

    navigation.navigate('Credentials', {
      sport: sport,
      position: position,
      name: name,
      phoneInput: phoneInput,
      date: date,
      image: image,
      address: address,
      city: city,
      state: state,
      zip: zip,
      email: email,
      phoneInput: phonenumber,
    });
  }

  return (
    <ScrollView style={styles.page}>
      <TextInput
        style={styles.input}
        placeholder='Enter Street Address'
        value={address}
        onChangeText={(text) => {
          setAddress(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter City'
        value={city}
        onChangeText={setCity}
      />
      <SelectDropdown
        data={statesNames}
        defaultValue={state}
        defaultButtonText={'SELECT COUNTY'}
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
        style={styles.input}
        placeholder='Enter Zipcode'
        value={zip}
        onChangeText={setZip}
        keyboardType={'number-pad'}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter Email Address'
        value={email}
        onChangeText={(text) => {
          setEmail(text);
        }}
        keyboardType={'email-address'}
      />
      <PhoneInput
        ref={phoneInput}
        value={phonenumber}
        placeholder='Enter Phone Number'
        defaultCode='US'
        onChangeText={text => setPhonenumber(text)}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        containerStyle={styles.dropdownBtnStyle}
        textInputStyle={{ fontSize: 14 }}
      />
      <Pressable style={styles.button} onPress={onAddressAdd}>
        <Text style={styles.buttonText}>NEXT</Text>
      </Pressable>
    </ScrollView>
  );
}

export default AddressScreen;