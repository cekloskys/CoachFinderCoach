import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import { useRoute } from '@react-navigation/native';
const UsaStates = require('usa-states').UsaStates;

const validator = require('validator');

const AddressScreen = () => {

  const navigation = useNavigation();
  const usStates = new UsaStates();
  const statesNames = usStates.arrayOf('names');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');
  const [email, setEmail] = useState('');

  const route = useRoute();

  const sport = route.params?.sport;
  const position = route.params?.position;
  const name = route.params?.name;
  const phoneInput = route.params?.phoneInput;
  const date = route.params?.date;
  const gender = route.params?.gender;

  const onAddressAdd = () => {
    
    if (!address){
       alert('Please your street address.');
       return;
     }
     if (!city){
       alert('Please enter your city.');
       return;
     }
     if (!state){
       alert('Please select your state.');
       return;
     }
     if (!zip){
       alert('Please enter your zipcode.');
       return;
     }
     if (!email || !validator.isEmail(email)){
        alert('Please enter your valid email address.');
        return;
     }
    
    
    navigation.navigate('Credentials', {
      sport: sport,
      position: position,
      name: name,
      phoneInput: phoneInput,
      date: date,
      gender: gender,
      address: address,
      city: city,
      state: state,
      zip: zip,
      email: email,
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
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onAddressAdd}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default AddressScreen;