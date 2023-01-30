import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import countryList from 'country-list';
import SelectDropdown from 'react-native-select-dropdown';

const countries = countryList.getData();
const UsaStates = require('usa-states').UsaStates;

const AddressScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const usStates = new UsaStates();
  const statesNames = usStates.arrayOf('names');

  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [state, setState] = useState('');

  const onAddressAdd = () => {
    // if (!address) {
      // alert('Please input an address.');
      // return;
    // }

    navigation.navigate('Credentials');
  }

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Enter Address'
          value={address}
          onChangeText={(text) => {
            setAddress(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Enter City'
          value={city}
          onChangeText={setCity}
        />
      </View>
      <View style={styles.row}>
      <SelectDropdown
        data={statesNames}
        defaultButtonText={'Select State'}
        onSelect={(selectedItem, index) => {
          setState(selectedItem);
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
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Enter Zipcode'
          value={zip}
          onChangeText={setZip}
          keyboardType={'number-pad'}
        />
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onAddressAdd}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default AddressScreen;