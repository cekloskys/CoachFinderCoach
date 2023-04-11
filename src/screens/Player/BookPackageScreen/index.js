import { View, TextInput, Pressable, Text } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Booking, Availability, Coach } from '../../../models';
import { DataStore } from 'aws-amplify';
import { useAuthContext } from '../../../context/AuthContext';

const BookPackageScreen = () => {
  const route = useRoute();
  const pack = route.params?.pack;

  const { dbUser } = useAuthContext();

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const navigation = useNavigation();
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState('');
  const [timePicker, setTimePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [newBooking, setNewBooking] = useState();
  const [availability, setAvailability] = useState([]);
  const [coach, setCoach] = useState(null);

  useEffect(() => {
    if (!pack) {
      return;
    }
    DataStore.query(Availability, (a) => a.coachID.eq(pack.coachID)).then(setAvailability);
  }, [pack]);

  useEffect(() => {
    if (!pack) {
      return;
    }
    DataStore.query(Coach, (c) => c.id.eq(pack.coachID)).then(setCoach);
  }, [pack]);

  function showDatePicker() {
    setDatePicker(true);
  };

  function showTimePicker() {
    setTimePicker(true);
  };

  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
    setSelectedDate(value.toLocaleDateString());
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

  const createNewBooking = async () => {
    const newBooking = await DataStore.save(new Booking({
      coachID: pack.coachID,
      packageID: pack.id,
      profileID: dbUser.id,
      athleteName: name,
      status: 'PENDING',
      startDate: date.toLocaleDateString(),
      startTime: selectedTime,
    }));
    setNewBooking(newBooking);
    alert('Booking Approved')
    navigation.navigate('Search Coaches');
  }

  const validateDay = () => {
    const day = date.getDay();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let isValid = false;
    for (let i = 0; i < availability.length; i++) {
      if (availability[i].day === days[day]) {
        isValid = true;
      }
    }
    return isValid;
  };

  const validateTime = () => {
    let time = selectedTime.split(':');
    let hour = time[0];
    let ampm = time[1].split(' ');
    let concatTime = hour + ' ' + ampm[1];
    console.log(concatTime);
    let isValid = false;
    for (let i = 0; i < availability.length; i++) {
      if (availability[i].time === concatTime) {
        isValid = true;
      }
    }
    return isValid;
  };

  const validation = () => {
    if (!dbUser) {
      alert('You must create a profile before booking with a coach!');
      navigation.navigate('Profile');
    } else {
      if (!name) {
        alert('Please enter athlete\'s name.');
        return;
      }
      if (!age) {
        alert('Please enter athlete\'s age.');
        return;
      }

      const today = new Date(Date.now());
      if (!date || date.toLocaleDateString() === today.toLocaleDateString()) {
        alert('Please select a valid start date.');
        return;
      }

      const day = date.getDay();
      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      if (!validateDay()) {
        alert('Please select a valid start date. ' + coach[0].fullName + ' is not available on ' + days[day] + '.');
        return;
      }

      if (!selectedTime) {
        alert('Please select a valid start time.');
        return;
      }

      if (!validateTime()) {
        alert('Please select a valid start time. ' + coach[0].fullName + ' is not available at ' + selectedTime + '.');
        return;
      }

      createNewBooking()
    }
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
          minimumDate={new Date(Date.now())}
        />
      )}
      {!datePicker && (
        <View>
          <Pressable onPress={showDatePicker} style={styles.button}>
            <Text style={styles.buttonText}>SELECT A START DATE</Text>
          </Pressable>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={"Selected Start Date"}
        value={selectedDate}
        editable={false}
      />
      {timePicker && (
        <DateTimePicker
          value={time}
          mode={'time'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={false}
          onChange={onTimeSelected}
          minuteInterval={5}
        />
      )}
      {!timePicker && (
        <View>
          <Pressable onPress={showTimePicker} style={styles.button}>
            <Text style={styles.buttonText}>SELECT A START TIME</Text>
          </Pressable>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder={"Selected Start Time"}
        value={selectedTime}
        editable={false}
      />
      <Pressable
        style={styles.bookbutton} onPress={validation}>
        <Text style={styles.buttonText}>BOOK PACKAGE</Text>
      </Pressable>
    </View>
  );
}

export default BookPackageScreen;