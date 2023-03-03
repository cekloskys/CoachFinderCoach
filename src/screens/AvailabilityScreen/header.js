import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MultiSelect from 'react-native-multiple-select';
import { DataStore } from 'aws-amplify';
import { Coach, Sport, PositionCoach, AccreditationCoach, AgeCoach, SpecialityCoach } from '../../models';
import PhoneInput from 'react-native-phone-number-input';

const Header = ({coach}) => {

  const navigation = useNavigation();

  const [days, setDays] = useState([]);
  let selectedDays = [];
  const [times, setTimes] = useState([]);
  let selectedTimes = [];

  const [sportID, setSportID] = useState('');
  const [positionID, setPositionID] = useState('');

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
      name: '8am',
    },
    {
      id: '9',
      name: '9am',
    },
    {
      id: '10',
      name: '10am',
    },
    {
      id: '11',
      name: '11am',
    },
    {
      id: '12',
      name: '12pm',
    },
    {
      id: '13',
      name: '1pm',
    },
    {
      id: '14',
      name: '2pm',
    },
    {
      id: '15',
      name: '3pm',
    },
    {
      id: '16',
      name: '4pm',
    },
    {
      id: '17',
      name: '5pm',
    },
    {
      id: '18',
      name: '6pm',
    },
    {
      id: '19',
      name: '7pm',
    },
    {
      id: '20',
      name: '8pm',
    },
  ];

  console.log(coach.position);
  console.log(days);

  const onSelectedDaysChange = (days) => {
    setDays(days);
  };

  const onSelectedTimesChange = (times) => {
    setTimes(times);
  };

  const getSportId = async() => {
    DataStore.query(Sport, (s) => s.name.eq(coach.sport)).then(setSportID);
  };

  const onPress = async() => {
    if (days.length == 0) {
      alert('Please select the day or days you\'re available.');
      return;
    } else {
      for (let i = 0; i < days.length; i++) {
        var tempDay = dayOptions.find(item => item.id === days[i]);
        selectedDays.push(tempDay);
      } 
    }

    if (times.length == 0) {
      alert('Please select the time or times you\'re available.');
      return;
    } else {
      for (let i = 0; i < times.length; i++) {
        var tempTime = timeOptions.find(item => item.id === times[i]);
        selectedTimes.push(tempTime);
      } 
    }

    const result = await DataStore.save(new Coach({
      highlights: coach.highlights,
      sessionPlan: coach.sessionplan,
      background: coach.athleticbackground,
      yearsCoaching: coach.coachexperience,
      yearsPlaying: coach.experience,
      college: coach.college,
      fullName: coach.name,
      streetAddress: coach.address,
      city: coach.city,
      state: coach.state,
      zip: coach.zip,
      email: coach.zip,
      shortDesc: coach.description,
      phoneNbr: coach.phoneInput,
      dob: coach.date.toString(),
      sportID: coach.sport,
    })); 
    

    await DataStore.save(new PositionCoach({
      coachID: result.id,
      positionCoachPositionId: coach.position,
    }));

    await DataStore.save(new AccreditationCoach({
      accredidationID: result.id,
      accreditationCoachAccreditationId: coach.accredidation,
    }));

    await DataStore.save(new AgeCoach({
      ageID: result.id,
      ageCoachAgeId: coach.age,
    }));

    await DataStore.save(new SpecialityCoach({
      specialityID: result.id,
      specialityCoachSpecialityId: coach.speciality,
    }))

    console.log(result);
    alert('coach created');
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
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          fontSize={16}
          searchInputStyle={{
            color: '#CCC',
            fontSize: 16,
            height: 50,
          }}
          styleMainWrapper={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'lightgrey',
            backgroundColor: 'white',
          }}
          styleDropdownMenu={{
            borderRadius: 10,
          }}
          styleInputGroup={{
            borderRadius: 10,
          }}
          styleDropdownMenuSubsection={{
            borderRadius: 10,
          }}
          styleSelectorContainer={{
            borderRadius: 10,
          }}
          styleTextDropdown={{
            height: 25,
            marginLeft: 10,         
          }}
          styleTextDropdownSelected={{
            height: 25,
            marginLeft: 10,
          }}
          submitButtonColor="#CCC"
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
          tagRemoveIconColor="#CCC"
          tagBorderColor="#CCC"
          tagTextColor="#CCC"
          selectedItemTextColor="#CCC"
          selectedItemIconColor="#CCC"
          itemTextColor="#000"
          fontSize={16}
          searchInputStyle={{
            color: '#CCC',
            fontSize: 16,
            height: 50,
          }}
          styleMainWrapper={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'lightgrey',
            backgroundColor: 'white',
          }}
          styleDropdownMenu={{
            borderRadius: 10,
          }}
          styleInputGroup={{
            borderRadius: 10,
          }}
          styleDropdownMenuSubsection={{
            borderRadius: 10,
          }}
          styleSelectorContainer={{
            borderRadius: 10,
          }}
          styleTextDropdown={{
            height: 25,
            marginLeft: 10,         
          }}
          styleTextDropdownSelected={{
            height: 25,
            marginLeft: 10,
          }}
          submitButtonColor="#CCC"
          submitButtonText="Submit"
        />
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default Header;