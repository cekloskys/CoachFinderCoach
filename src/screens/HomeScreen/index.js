import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DataStore } from '@aws-amplify/datastore';
import { useEffect } from 'react';
import { Sport, Position } from '../../models';

const HomeScreen = () => {

  const navigation = useNavigation();
  const [phonenumber, setPhonenumber] = useState('');
  const [gender, setGender] = useState('');
  const [formattedValue, setFormattedValue] = useState("");

  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState('');

  const phoneInput = useRef(null);

  const [sport, setSport] = useState('');
  const [sports, setSports] = useState([]);
  const [displaySports, setDisplaySports] = useState([]);

  const [position, setPosition] = useState('');
  const [positions, setPositions] = useState([]);
  const [displayPositions, setDisplayPositions] = useState([]);

  useEffect(() => {
    DataStore.query(Sport).then(setSports);
  }, []);

  useEffect(() => {
    if (!sports) {
      return;
    }
    const dt = [];
    for (let i = 0; i < sports.length; i++) {
      dt.push(sports[i].name);
    }
    dt.sort();
    setDisplaySports(dt);
  }, [sports]);

  useEffect(() => {
    DataStore.query(Position).then(setPositions);
  }, []);

  useEffect(() => {
    if (!positions) {
      return;
    }
    const dt = [];
    for (let i = 0; i < positions.length; i++) {
      dt.push(positions[i].name);
    }
    dt.sort();
    setDisplayPositions(dt);
  }, [positions]);

  const genders = [
    'Male',
    'Female',
  ]

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const onDateSelected = (event, value) => {
    setDate(value);
    const day = value.getDate();
    const month = value.getMonth();
    const year = value.getFullYear();
    setSelectedDate((month + 1) + '/' + day + '/' + year);    
    setDatePicker(false);
  };

  const onSelectSport = () => {
    if (!sport) {
      alert('Please select a sport.');
      return;
    }
    if (!position) {
      alert('Please select a position.');
      return;
    }
    if (!name) {
      alert('Please enter your name.');
      return;
    }
    if (!phoneInput.current?.isValidNumber(phonenumber)) {
      alert('Please enter a valid phone number.');
      return;
    }
    const today = new Date(Date.now());
    if (!date || date.toLocaleDateString() === today.toLocaleDateString()) {
      alert('Please select your date of birth.');
      return;
    }
    if (!gender) {
      alert('Please select your gender.');
      return;
    }

    const sportID = sports.find(s => s.name == sport);
    const positionID = positions.find(p => p.name == position);

    navigation.navigate('Address', {
      sport: sportID.id,
      position: positionID.id,
      name: name,
      phoneInput: phonenumber,
      date: selectedDate,
      gender: gender,
    });
  }

  return (
    <ScrollView style={styles.page}>
      <SelectDropdown
        data={displaySports}
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
      <SelectDropdown
        data={displayPositions}
        defaultButtonText={'Select Position'}
        onSelect={(selectedItem, index) => {
          setPosition(selectedItem);
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
        placeholder='Enter Full Name'
        value={name}
        onChangeText={(text) => {
          setName(text);
        }}
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
        <View>
          <Pressable style={styles.button} onPress={showDatePicker}>
            <Text style={styles.buttonText}>Select Date of Birth</Text>
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
        <Pressable style={styles.button} onPress={onSelectSport}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;