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
  const email = route.params?.email;

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
    dt.sort();
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
  dt.sort();
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
  dt.sort();
  setDisplaySpecialties(dt);
}, [specialties]);

  const onAddCredentials = () => {
    if (!experience || experience === '0'){
      alert('Please enter years playing experience.');
      return;
    }
    if (!coachexperience || coachexperience === '0') {
      alert('Please enter years coaching experience.');
      return;
    }
    if (!accreditation){
      alert('Please select an accreditation.');
      return;
    }
    if (!age){
      alert('Please select an age preference.');
      return;
    }
    if (!specialty){
      alert('Please select a specialty.')
      return;
    }

    const accreditationID = accreditations.find(a => a.name == accreditation);
    const ageID = ages.find(a => a.name == age);
    const specialtyID = specialties.find(s => s.name == specialty);

    navigation.navigate('Biography', {
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
      coachexperience: coachexperience,
      experience: experience,
      accreditation: accreditationID.id,
      age: ageID.id,
      specialties: specialtyID.id,
    });
  }

  return (
    <ScrollView style={styles.page}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>Years Coaching</Text>
        <View style={{ marginLeft: 'auto', marginBottom: 10 }}>
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
        <View style={{ marginLeft: 'auto', marginBottom: 5 }}>
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
        defaultButtonText={'Select Accreditation'}
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
        defaultButtonText={'Select Age Preference'}
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
        defaultButtonText={'Select Specialty'}
        onSelect={(selectedItem, index) => {
          setSpecialty(selectedItem);
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