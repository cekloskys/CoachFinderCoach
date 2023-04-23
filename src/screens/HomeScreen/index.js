import React, { useState } from 'react';
import { Text, TextInput, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Auth, DataStore } from 'aws-amplify';
import { useEffect } from 'react';
import { useCoachContext } from '../../context/CoachContext';
import { useSportContext } from '../../context/SportContext';

const HomeScreen = () => {

  const { createdCoach, createdCoachPosition, coachDBUser, coachDBPosition } = useCoachContext();
  const { sports, positions } = useSportContext();

  const navigation = useNavigation();

  const [image, setImage] = useState(coachDBUser?.image || createdCoach?.image || '');
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [name, setName] = useState(coachDBUser?.fullName || createdCoach?.fullName || '');

  const [sport, setSport] = useState('');
  const [displaySports, setDisplaySports] = useState([]);
  const [coachSport, setCoachSport] = useState('');

  const [position, setPosition] = useState('');
  const [displayPositions, setDisplayPositions] = useState([]);
  const [coachPosition, setCoachPosition] = useState('');

  useEffect(() => {
    if (coachDBUser?.dob) {
      setDate(new Date(coachDBUser?.dob));
      setSelectedDate(coachDBUser?.dob);
    }
    if (coachDBUser?.fullName) {
      setName(coachDBUser?.fullName);
    }
    if (coachDBUser?.image) {
      setImage(coachDBUser?.image);
    }
    if (createdCoach?.dob) {
      setDate(new Date(createdCoach?.dob));
      setSelectedDate(createdCoach?.dob);
    }
    if (createdCoach?.fullName) {
      setName(createdCoach?.fullName);
    }
    if (createdCoach?.image) {
      setImage(createdCoach?.image);
    }
  }, [createdCoach, coachDBUser]);

  useEffect(() => {
    if (coachDBUser && sports.length != 0) {
      const result = sports.find(s => s.id == coachDBUser.sportID);
      setCoachSport(result.name);
      setSport(result.name);
    }
    if (createdCoach && sports.length != 0) {
      const result = sports.find(s => s.id == createdCoach.sportID);
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
    if (coachDBPosition && positions.length != 0) {
      const result = positions.find(p => p.id == coachDBPosition.positionCoachPositionId);
      setCoachPosition(result.name);
      setPosition(result.name);
    }
    if (createdCoachPosition && positions.length != 0) {
      const result = positions.find(p => p.id == createdCoachPosition.positionCoachPositionId);
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
      alert('Please enter your full name.');
      return;
    }
    const today = new Date(Date.now());
    if (!date || date.toLocaleDateString() === today.toLocaleDateString()) {
      alert('Please select your date of birth.');
      return;
    }

    const sportID = sports.find(s => s.name == sport);
    const positionID = positions.find(p => p.name == position);

    navigation.navigate('Address', {
      sport: sportID.id,
      position: positionID.id,
      name: name,
      date: selectedDate,
      image: (image ? image : 'https://giftoflifechc.s3.amazonaws.com/coach-finder-logo.png'),
    });
  }

  const signOut = async () => {
    DataStore.clear();
    Auth.signOut()
  };
  
  if (displaySports.length === 0 || displayPositions.length === 0) {
    return (
      <ActivityIndicator size="large" color="#db4f40" style={{ flex: 1 }} />
    )
  }

  return (
    <ScrollView style={styles.page}>
      <SelectDropdown
        data={displaySports}
        defaultValue={coachSport}
        defaultButtonText={'SELECT SPORT'}
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
        defaultButtonText={'SELECT POSITION'}
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
      {datePicker && (
        <DateTimePicker
          value={date}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onDateSelected}
          maximumDate={new Date(Date.now())}
        />
      )}
      {!datePicker && (
        <Pressable style={styles.button} onPress={showDatePicker}>
          <Text style={styles.buttonText}>SELECT DATE OF BIRTH</Text>
        </Pressable>)}
      <TextInput
        style={styles.input}
        value={date.toLocaleDateString()}
        editable={false}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter Image Link'
        value={image}
        onChangeText={(text) => {
          setImage(text);
        }}
      />
      <Pressable style={styles.button} onPress={onSelectSport}>
        <Text style={styles.buttonText}>NEXT</Text>
      </Pressable>
      <Pressable style={styles.signOutButton} onPress={signOut}>
        <Text style={styles.buttonText}>SIGN OUT</Text>
      </Pressable>
    </ScrollView>
  );
}

export default HomeScreen;