import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';

// const database = require

const HomeScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [sport, setSport] = useState('');
  
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

  const onSelectSport = () => { 
    if (!sport){
      alert('Please select a sport.');
      return;
    }
    if (!phonenumber){
      alert('Please enter a phone number');
      return;
    }
    if (!dob){
      alert('Please enter a date of birth in format MM-DD-YYYY.');
      return;
    }
    if (!gender){
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
          buttonTextStyle={styles.dropdownBtnStyle}
          dropdownStyle={styles.dropdownDropdownStyle}
          rowStyle={styles.dropdownRowStyle}
          rowTextStyle={styles.dropdownRowTxtStyle}
          />
          <TextInput
            value={phonenumber}
            onChangeText={value => setPhonenumber(value)}
            style={styles.phonenumber}
            clearButtonMode={'while-editing'}
            placeholder={'Phone Number'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={dob}
            onChangeText={value => setDob(value)}
            style={styles.dob}
            clearButtonMode={'while-editing'}
            placeholder={'Date of birth'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={gender}
            onChangeText={value => setGender(value)}
            style={styles.gender}
            clearButtonMode={'while-editing'}
            placeholder={'Gender'}
            placeholderTextColor={'grey'}
          />
          <View style={styles.bottom}>
              <Pressable style={styles.button} onPress={onSelectSport}>
                  <Text style={styles.buttonText}>Next</Text>
              </Pressable>
          </View>
        </View>
      );
}

export default HomeScreen;