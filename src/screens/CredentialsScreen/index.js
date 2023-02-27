import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'
import { DataStore } from '@aws-amplify/datastore';
import { useEffect } from 'react';
import { Accreditation, Age, Speciality } from '../../models';
import { useRoute } from '@react-navigation/native';

const CredentialsScreen = () => {

  const navigation = useNavigation();
  const [college, setCollege] = useState('');
  const [experience, setExperience] = useState(0);

  const [accreditation, setAccreditation] = useState('');
  const [accreditations, setAccreditations] = useState([]);
  const [displayAccreditations, setDisplayAccreditations] = useState([]);

  const [age, setAge] = useState('');
  const [ages, setAges] = useState([]);
  const [displayAges, setDisplayAges] = useState([]);

  const [specialty, setSpecialty] = useState('');
  const [specialties, setSpecialties] = useState([]);
  const [displaySpecialties, setDisplaySpecialties] = useState([]);

  const route = useRoute();

  const sport = route.params?.sport;
  const position = route.params?.position;
  const name = route.params?.name;
  const phoneInput = route.params?.phoneInput;
  const date = route.params?.date;
  const gender = route.params?.gender;
  const address = route.params?.address;
  const city = route.params?.city;
  const state = route.params?.state;
  const zip = route.params?.zip;

  const [coachexperience, setCoachexperience] = useState(0);

  useEffect(() => {
    DataStore.query(Accreditation).then(setAccreditations);
  }, []);

  useEffect(() => {
    if (!accreditations) {
        return;
    }
    const dt = [];
    for (let i = 0; i < accreditations.length; i++) {
        dt.push(accreditations[i].name);
    }
    setDisplayAccreditations(dt);
}, [accreditations]);

useEffect(() => {
  DataStore.query(Age).then(setAges);
}, []);

useEffect(() => {
  if (!ages) {
      return;
  }
  const dt = [];
  for (let i = 0; i < ages.length; i++) {
      dt.push(ages[i].name);
  }
  setDisplayAges(dt);
}, [ages]);

useEffect(() => {
  DataStore.query(Speciality).then(setSpecialties);
}, []);

useEffect(() => {
  if (!specialties) {
      return;
  }
  const dt = [];
  for (let i = 0; i < specialties.length; i++) {
      dt.push(specialties[i].name);
  }
  setDisplaySpecialties(dt);
}, [specialties]);

  const onAddCredentials = () => {
    /*
    if (!college){
      alert('Please enter a college.');
      return;
    }
    if (!experience || experience === '0'){
      alert('Please enter years playing experience.');
      return;
    }
    if (!coachexperience || coachexperience === '0') {
      alert('Please enter years coaching experience.');
      return;
    }
    if (!accreditations){
      alert('Please select accreditations.');
      return;
    }
    if (!age){
      alert('Please select an age preference.');
      return;
    }
    if (!specialties){
      alert('Please select specialties.')
      return;
    }
   */

    navigation.navigate('Biography', {
      sport: sport,
      position: position,
      name: name,
      //phoneInput: phoneInput.current.getValue(),
      phoneInput: phoneInput,
      date: date,
      gender: gender,
      address: address,
      city: city,
      state: state,
      zip: zip,
      college: college,
      experience: experience,
      accreditation: accreditation,
      age: age,
      specialties: specialties,
    });
  }

  return (
    <ScrollView style={styles.page}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>Years Coaching</Text>
        <View style={{ marginLeft: 'auto' }}>
          <NumericInput
            value={coachexperience}
            onChange={(text) => {
              setCoachexperience(text)
            }}
            rounded
            minValue={1} />
        </View>
        </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>Years Playing</Text>
        <View style={{ marginLeft: 'auto' }}>
          <NumericInput
            value={experience}
            onChange={(text) => {
              setExperience(text)
            }}
            rounded
            minValue={1} />
        </View>
      </View>
      <SelectDropdown
        data={displayAccreditations}
        defaultButtonText={'Select Accreditations'}
        onSelect={(selectedItem, index) => {
          setAccreditation(selectedItem);
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
        data={displayAges}
        defaultButtonText={'Select Age Preferences'}
        onSelect={(selectedItem, index) => {
          setAge(selectedItem);
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
        data={displaySpecialties}
        defaultButtonText={'Select Specialties'}
        onSelect={(selectedItem, index) => {
          setSpecialties(selectedItem);
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
        <Pressable style={styles.button} onPress={onAddCredentials}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default CredentialsScreen;