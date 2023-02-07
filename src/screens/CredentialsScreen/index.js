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
  const [experience, setExperience] = useState('');
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
    /* 
    if (!college){
      alert('Please enter a school.');
      return;
    }
    if (!experience){
      alert('Please enter your playing experience.');
      return;
    }
    if (!accreditations){
      alert('Please enter accreditations.');
      return;
    }
    if (!age){
      alert('Please enter an age preference.');
      return;
    }
    if (!specialties){
      alert('Please enter specialties.')
      return;
    }
    */
   
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
      <Text style={styles.text}>Playing Experience</Text>
      <View style={{ marginLeft: 'auto'}}>
      <NumericInput
        value={0}
        onChange={(text) => {
          setExperience(text)
        }}
        rounded
        minValue={0} />
        </View>
        </View>
      <View style={styles.row}>
      <SelectDropdown
        data={accredit}
        defaultButtonText={'Accreditations'}
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
      <SelectDropdown
        data={special}
        defaultButtonText={'Specialties'}
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