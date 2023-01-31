import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';

const BiographyScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [highlights, setHighlights] = useState('');
  const [sessionplan, setSessionplan] = useState('');
  const [coachexperience, setCoachexperience] = useState('');
  const [athleticbackground, setAthleticbackground] = useState('');

  const coachexperiences = [
    '1-3',
    '3-5',
    '5-8',
    '8-10',
    '10+',
  ];

  const onAddBiography = () => {
    /*
    if (!name) {
      alert('Please enter your first and last name.')
      return;
    }
    if (!highlights) {
      alert('Please enter athletic highlights.');
      return;
    }
    if (!sessionplan) {
      alert('Please enter a session plan.');
      return;
    }
    if (!coachexperience) {
      alert('Please enter coaching experience.');
      return;
    }
    if (!athleticbackground) {
      alert('Please enter athletic background.');
      return;
    }
    */
    navigation.navigate('Availability');
  }

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='First and Last Name'
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Athletic Highlights'
          value={highlights}
          onChangeText={(text) => {
            setHighlights(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Session Plan'
          value={sessionplan}
          onChangeText={(text) => {
            setSessionplan(text);
          }}
        />
      </View>
      <SelectDropdown
        data={coachexperiences}
        defaultButtonText={'Coaching Experience'}
        onSelect={(selectedItem, index) => {
          setCoachexperience(selectedItem);
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
          placeholder='Athletic Background'
          value={athleticbackground}
          onChangeText={(text) => {
            setAthleticbackground(text);
          }}
        />
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onAddBiography}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default BiographyScreen;