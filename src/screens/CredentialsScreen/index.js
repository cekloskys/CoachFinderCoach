import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';

const CredentialsScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [college, setCollege] = useState('');
  const [experience, setExperience] = useState('');
  const [accreditations, setAccreditations] = useState('');
  const [age, setAge] = useState('');
  const [specialties, setSpecialties] = useState('');
  // const [Credentials, setCredentials] = useState('');

  const experiences = [
    '1-3',
    '3-5',
    '5-8',
    '8-10',
    '10+',
  ];

  const preference = [
    'Elementary School',
    'Middle School',
    'High School',
  ]

  const onAddCredentials = () => {
    /* if (!college){
      alert('Please enter a school.');
      return;
    }
    if (!experience){
      alert('Please enter your experience.');
      return;
    }
    if (!accreditations){
      alert('Please enter accreditations.');
      return;
    }
    if (!age){
      alert('Please enter an age range.');
      return;
    }
    if (!specialties){
      alert('Please enter specialties.')
    }
    */
    navigation.navigate('Biography');
  }

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Enter College'
          value={college}
          onChangeText={(text) => {
            setCollege(text);
          }}
        />
      </View>
      <SelectDropdown
        data={experiences}
        defaultButtonText={'Years Experience'}
        onSelect={(selectedItem, index) => {
          setExperience(selectedItem);
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
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Accreditations'
          value={accreditations}
          onChangeText={(text) => {
            setAccreditations(text);
          }}
        />
        </View>
      <SelectDropdown
        data={preference}
        defaultButtonText={'Age Preference'}
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
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Specialties'
          value={specialties}
          onChangeText={(text) => {
            setSpecialties(text);
          }}
        />
        </View>
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onAddCredentials}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default CredentialsScreen;