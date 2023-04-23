import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import MultiSelect from 'react-native-multiple-select';
import { useCoachContext } from '../../context/CoachContext';
import { DataStore } from 'aws-amplify';
import { Coach } from '../../models';

const Header = ({ coach }) => {

  const { createCoach,
    createdCoachAvailability,
    coachDBAvailability,
    coachDBUser,
    updateCoach,
    createdCoach,
    sub,
    setCoachDBUser,
  } = useCoachContext();

  const navigation = useNavigation();

  const [days, setDays] = useState([]);
  const [times, setTimes] = useState([]);

  let selectedDays = [];
  let selectedTimes = [];
  let availability = [];

  useEffect(() => {
    if (!createdCoach) {
      return;
    }
    if (!sub) {
      return;
    }
    DataStore.query(Coach, (coach) => coach.sub.eq(sub)).then((coaches) =>
      setCoachDBUser(coaches[0]));
  }, [createdCoach, sub]);

  const dayOptions = [
    {
      id: '1',
      name: 'Monday',
    },
    {
      id: '2',
      name: 'Tuesday',
    },
    {
      id: '3',
      name: 'Wednesday',
    },
    {
      id: '4',
      name: 'Thursday',
    },
    {
      id: '5',
      name: 'Friday',
    },
    {
      id: '6',
      name: 'Saturday',
    },
    {
      id: '7',
      name: 'Sunday',
    },
  ];

  const timeOptions = [
    {
      id: '8',
      name: '8 AM',
    },
    {
      id: '9',
      name: '9 AM',
    },
    {
      id: '10',
      name: '10 AM',
    },
    {
      id: '11',
      name: '11 AM',
    },
    {
      id: '12',
      name: '12 PM',
    },
    {
      id: '13',
      name: '1 PM',
    },
    {
      id: '14',
      name: '2 PM',
    },
    {
      id: '15',
      name: '3 PM',
    },
    {
      id: '16',
      name: '4 PM',
    },
    {
      id: '17',
      name: '5 PM',
    },
    {
      id: '18',
      name: '6 PM',
    },
    {
      id: '19',
      name: '7 PM',
    },
    {
      id: '20',
      name: '8 PM',
    },
  ];

  useEffect(() => {
    if (coachDBAvailability.length != 0) {
      let result = [];
      for (let i = 0; i < coachDBAvailability.length; i++) {
        var tempDay = dayOptions.find(d => d.name == coachDBAvailability[i].day);
        if (!result.includes(tempDay.id)) {
          result.push(tempDay.id);
        }
      }
      setDays(result);
    }
    if (createdCoachAvailability.length != 0) {
      let result = [];
      for (let i = 0; i < createdCoachAvailability.length; i++) {
        var tempDay = dayOptions.find(d => d.name == createdCoachAvailability[i].day);
        if (!result.includes(tempDay.id)) {
          result.push(tempDay.id);
        }
      }
      setDays(result);
    }
  }, [createdCoachAvailability, coachDBAvailability]);

  useEffect(() => {
    if (coachDBAvailability.length != 0) {
      let result = [];
      for (let i = 0; i < coachDBAvailability.length; i++) {
        var tempTime = timeOptions.find(d => d.name == coachDBAvailability[i].time);
        if (!result.includes(tempTime.id)) {
          result.push(tempTime.id);
        }
      }
      setTimes(result);
    }
    if (createdCoachAvailability.length != 0) {
      let result = [];
      for (let i = 0; i < createdCoachAvailability.length; i++) {
        var tempTime = timeOptions.find(d => d.name == createdCoachAvailability[i].time);
        if (!result.includes(tempTime.id)) {
          result.push(tempTime.id);
        }
      }
      setTimes(result);
    }
  }, [createdCoachAvailability, coachDBAvailability]);

  const onSelectedDaysChange = (days) => {
    setDays(days);
  };

  const onSelectedTimesChange = (times) => {
    setTimes(times);
  };

  const onPress = async () => {
    if (days.length == 0) {
      alert('Please select the day or days you\'re available.');
      return;
    } else {
      for (let i = 0; i < days.length; i++) {
        var tempDay = dayOptions.find(item => item.id === days[i]);
        selectedDays.push(tempDay.name);
      }
    }

    if (times.length == 0) {
      alert('Please select the time or times you\'re available.');
      return;
    } else {
      for (let i = 0; i < times.length; i++) {
        var tempTime = timeOptions.find(item => item.id === times[i]);
        selectedTimes.push(tempTime.name);
      }
    }

    for (let i = 0; i < selectedDays.length; i++) {
      for (let j = 0; j < selectedTimes.length; j++) {
        availability.push({
          day: selectedDays[i],
          time: selectedTimes[j],
        });
      }
    }

    if (coachDBUser) {
      updateCoach(coachDBUser, coach, coach.position, coach.accreditation, coach.age, coach.specialties, availability);
      alert('Coach updated.');
    } else if (createdCoach) {
      updateCoach(coachDBUser, coach, coach.position, coach.accreditation, coach.age, coach.specialties, availability);
      alert('Coach updated.');
    } else {
      createCoach(coach, coach.position, coach.accreditation, coach.age, coach.specialties, availability);
      alert('Coach created.');
    }
    navigation.navigate('Basic Information');
  }

  return (
    <View style={styles.page}>
      <View style={styles.row}>
        <MultiSelect
          items={dayOptions}
          uniqueKey='id'
          onSelectedItemsChange={onSelectedDaysChange}
          selectedItems={days}
          selectText="Select Days"
          searchInputPlaceholderText="Select Days"
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#556a8a"
          tagBorderColor="#556a8a"
          tagTextColor="#556a8a"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          textColor='white'
          fontSize={14}
          searchInputStyle={{
            color: '#CCC',
            fontSize: 14,
            height: 50,
          }}
          styleMainWrapper={{
            borderWidth: 1,
            borderColor: '#556a8a',
            backgroundColor: 'white',
          }}
          styleDropdownMenuSubsection={{
            backgroundColor: '#556a8a',
          }}
          styleSelectorContainer={{
          }}
          styleTextDropdown={{
            height: 25,
            marginLeft: 10,
            fontSize: 14,
          }}
          styleTextDropdownSelected={{
            height: 25,
            marginLeft: 10,
            fontSize: 14,
          }}
          submitButtonColor="#556a8a"
          submitButtonText="Submit"
        />
      </View>
      <View style={styles.row}>
        <MultiSelect
          items={timeOptions}
          uniqueKey='id'
          onSelectedItemsChange={onSelectedTimesChange}
          selectedItems={times}
          selectText="Select Times"
          searchInputPlaceholderText="Select Times"
          onChangeInput={(text) => console.log(text)}
          tagRemoveIconColor="#556a8a"
          tagBorderColor="#556a8a"
          tagTextColor="#556a8a"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          textColor='white'
          fontSize={14}
          searchInputStyle={{
            color: '#CCC',
            fontSize: 14,
            height: 50,
          }}
          styleMainWrapper={{
            borderWidth: 1,
            borderColor: '#556a8a',
            backgroundColor: 'white',
          }}
          styleDropdownMenuSubsection={{
            backgroundColor: '#556a8a',
          }}
          styleSelectorContainer={{
          }}
          styleTextDropdown={{
            height: 25,
            marginLeft: 10,
            fontSize: 14,
          }}
          styleTextDropdownSelected={{
            height: 25,
            marginLeft: 10,
            fontSize: 14,
          }}
          submitButtonColor="#556a8a"
          submitButtonText="Submit"
        />
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>SAVE</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Header;