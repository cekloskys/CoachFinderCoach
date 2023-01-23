import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  
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
  ];

    return (
        <View style={styles.page}>
          <SelectDropdown
          data={sports}
          defaultButtonText={'Sport'}
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
              <Pressable style={styles.button} onPress={() => navigation.navigate('Address')}>
                  <Text style={styles.buttonText}>Next</Text>
              </Pressable>
          </View>
        </View>
      );
}

export default HomeScreen;