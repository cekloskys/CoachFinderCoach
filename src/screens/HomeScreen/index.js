import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Auth, DataStore, Hub } from 'aws-amplify';
import { useEffect } from 'react';
import { Sport, Position } from '../../models';
import { useCoachContext } from '../../context/CoachContext';

const HomeScreen = () => {

  const { createdCoach, createdCoachPosition, coachDBUser, coachDBPosition } = useCoachContext();

  const navigation = useNavigation();

  const [phonenumber, setPhonenumber] = useState(createdCoach?.phoneNbr || coachDBUser?.phoneNbr || '');
  const [image, setImage] = useState(createdCoach?.image || coachDBUser?.image || '');
  const [formattedValue, setFormattedValue] = useState("");
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState(createdCoach?.fullName || coachDBUser?.fullName || '');

  const phoneInput = useRef(null);

  const [sport, setSport] = useState('');
  const [sports, setSports] = useState([]);
  const [displaySports, setDisplaySports] = useState([]);
  const [coachSport, setCoachSport] = useState('');

  const [position, setPosition] = useState('');
  const [positions, setPositions] = useState([]);
  const [displayPositions, setDisplayPositions] = useState([]);
  const [coachPosition, setCoachPosition] = useState('');

  useEffect(() => {
    if (createdCoach?.dob){
      setDate(new Date(createdCoach?.dob));
    }
    if (coachDBUser?.dob){
      setDate(new Date(coachDBUser?.dob));
    }
  },[createdCoach, coachDBUser]);



  useEffect(() => {
    DataStore.query(Sport).then(setSports);
    const removeListener = Hub.listen('datastore', async ({ payload }) => {
      if (payload.event === 'syncQueriesReady') {
        DataStore.query(Sport).then(setSports);
      }
    });

    DataStore.start();

    return () => removeListener();

  }, []);

  useEffect(() => {
    if (createdCoach && sports.length != 0) {
      const result = sports.find(s => s.id == createdCoach.sportID);
      setCoachSport(result.name);
      setSport(result.name);
    }
    if (coachDBUser && sports.length != 0) {
      const result = sports.find(s => s.id == coachDBUser.sportID);
      setCoachSport(result.name);
      setSport(result.name);
    }
  }, [createdCoach, sports, coachDBUser]);

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
    if (createdCoachPosition && positions.length != 0) {
      const result = positions.find(p => p.id == createdCoachPosition.positionCoachPositionId);
      setCoachPosition(result.name);
      setPosition(result.name);
    }
    if (coachDBPosition && positions.length != 0) {
      const result = positions.find(p => p.id == coachDBPosition.positionCoachPositionId);
      setCoachPosition(result.name);
      setPosition(result.name);
    }
    
  }, [createdCoachPosition, positions, coachDBPosition]);

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
    /* if (!image) {
      alert('Please enter an image link of you.');
      return;
    } */

    const sportID = sports.find(s => s.name == sport);
    const positionID = positions.find(p => p.name == position);

    navigation.navigate('Address', {
      sport: sportID.id,
      position: positionID.id,
      name: name,
      phoneInput: phonenumber,
      date: selectedDate,
      image: image,
    });
  }

  const signOut = async () => {
    DataStore.clear();
    Auth.signOut()
  };

  return (
    <ScrollView style={styles.page}>
      <SelectDropdown
        data={displaySports}
        defaultValue={coachSport}
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
        defaultValue={coachPosition}
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
      <TextInput
        style={styles.input}
        placeholder='Enter Image Link'
        value={image}
        onChangeText={(text) => {
          setImage(text);
        }}
      />
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onSelectSport}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
        <Pressable style={styles.signOutButton} onPress={signOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;