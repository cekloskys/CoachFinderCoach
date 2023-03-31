import { View, TextInput, Pressable, Text } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Booking } from '../../../models';
import {DataStore} from 'aws-amplify';
import { useAuthContext } from '../../../context/AuthContext';

const BookPackageScreen = () => {
  const route = useRoute();
    const pack = route.params?.pack;
    console.log(pack);

    const {dbUser} = useAuthContext();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [newBooking, setNewBooking] = useState();
  
  function showDatePicker() {
    setDatePicker(true);
  };

 
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };


  const createNewBooking = async () => {
    const newBooking = await DataStore.save(new Booking({
        coachID: pack.coachID,
        packageID: pack.id,
        profileID: dbUser.id,
        athleteName: name,
        atheleteAge: age,
        startDate: date.toLocaleDateString(),
    }));
    setNewBooking(newBooking);
    alert('Booking Approved')
    navigation.navigate('Search Coaches');
  }
  const validation = () => {
    if (!name) {
      alert('Please enter athlete\'s name.');
      return
    }
    if (!age) {
      alert('Please enter athlete\'s age.');
      return
    }
    const today = new Date(Date.now());
    if (!date || date.toLocaleDateString() === today.toLocaleDateString()) {
      alert('Invalid start date.');
      return
    }
   


    createNewBooking()
  }

  return (
    <View style={styles.page}>
      <TextInput
        value={name}
        onChangeText={value => setName(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Athlete's Name"}
        placeholderTextColor={'lightgrey'}
      />
      <TextInput
        value={age}
        onChangeText={value => setAge(value)}
        style={styles.input}
        clearButtonMode={'while-editing'}
        placeholder={"Enter Athlete's Age"}
        placeholderTextColor={'lightgrey'}
        keyboardType={'number-pad'}
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
          <Pressable onPress={showDatePicker} style={styles.button}>
            <Text style={styles.buttonText}>Select Start Date</Text>
          </Pressable>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder='Date'
        value={date.toLocaleDateString()}
        editable={false}
      />  
      <Pressable
        style={styles.bookbutton} onPress={validation}>
        <Text style={styles.buttonText}>Book Package</Text>
      </Pressable>
    </View>
  );
}

export default BookPackageScreen;