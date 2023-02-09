import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'


const CredentialsScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [college, setCollege] = useState('');
  const [experience, setExperience] = useState(0);
  const [accreditations, setAccreditations] = useState('');
  const [age, setAge] = useState('');
  const [specialties, setSpecialties] = useState('');
  // const [Credentials, setCredentials] = useState('');

  const accredit = [
    'Qualified private coach',
    'Passed coach course',
  ];

  const preference = [
    'Kids',
    'Teenagers',
  ]

  const special = [
    'Footwork',
    'Shooting',
    'Skating',
    'Offense',
    'Defense',
    'Agility',
    'Dribbling',
    'Passing',
    'Catching',
    'Pitching',
    'Infield',
    'Outfield',
    'Javelin',
    'Hurdles',
    'Distance',
    'Sprint',
    'Quarterback',
    'Offensive Line',
    'Defensive Line',
    'Safety',
    'Cornerback',
    'Tight End',
    'Wide Receiver',
    'Libero',
    'Setter',
    'Serving',
    'Swing',
    'Putting',
    'Freestyle',
    'Backstroke',
    'Butterfly',
  ]

  const onAddCredentials = () => { 
    if (!college){
      alert('Please enter a college.');
      return;
    }
    if (!experience || experience === '0'){
      alert('Please enter years playing experience.');
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
   
    navigation.navigate('Biography');
  }

  return (
    <ScrollView style={styles.page}>
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
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.text}>Years Playing</Text>
      <View style={{ marginLeft: 'auto'}}>
      <NumericInput
        value={experience}
        onChange={(text) => {
          setExperience(text)
        }}
        rounded
        minValue={1} />
        </View>
        </View>
      <View style={styles.row}>
      <SelectDropdown
        data={accredit}
        defaultButtonText={'Select Accreditations'}
        onSelect={(selectedItem, index) => {
          setAccreditations(selectedItem);
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
      </View>
      <SelectDropdown
        data={preference}
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
        data={special}
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