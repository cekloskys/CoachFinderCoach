import { View, TextInput, Pressable, Text } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

const BookPackageScreen = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  
  function showDatePicker() {
    setDatePicker(true);
  };

  function showTimePicker() {
    setTimePicker(true);
  };
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };

  function onTimeSelected(event, value) {
    const currentTime = value || time;
    let tempTime = new Date(currentTime);
    let hours = tempTime.getHours();
    let minutes = tempTime.getMinutes();
    let timeValue = "" + ((hours > 12) ? hours - 12 : hours);
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;
    timeValue += (hours >= 12) ? " PM" : " AM";
    setSelectedTime(timeValue);
    setTimePicker(false);
  };

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
      alert('Please select a start date.');
      return
    }
    if (!time) {
      alert('Please select a start time.');
      return
    }

    navigation.navigate('Search')
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
            <Text style={styles.buttonText}>SELECT START DATE</Text>
          </Pressable>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder='Date'
        value={date.toLocaleDateString()}
        editable={false}
      />
      {timePicker && (
        <DateTimePicker
          value={time}
          mode={'time'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={false}
          onChange={onTimeSelected}

        />
      )}
      {!timePicker && (
        <View>
          <Pressable onPress={showTimePicker} style={styles.button}>
            <Text style={styles.buttonText}>Select Start Time</Text>
          </Pressable>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder='Time'
        value={selectedTime ? selectedTime : time.toLocaleTimeString()}
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