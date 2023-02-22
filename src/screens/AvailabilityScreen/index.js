import { View } from 'react-native';
import React from 'react';
import Header from './header';
import { FlatList } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';

const AvailabilityScreen = () => {

  const data = [
    {
      id: '1',
      name: '',
    },
  ];

  const route = useRoute();

  const sport = route.params?.sport;
  console.log(sport);
  const position = route.params?.position;
  console.log(position);
  const name = route.params?.name;
  console.log(name);
  const phoneInput = route.params?.phoneInput;
  console.log(phoneInput);
  const date = route.params?.date;
  console.log(date);
  const gender = route.params?.gender;
  console.log(gender);
  const address = route.params?.address;
  console.log(address);
  const city = route.params?.city;
  console.log(city);
  const state = route.params?.state;
  console.log(state);
  const zip = route.params?.zip;
  console.log(zip);
  const college = route.params?.college;
  console.log(college);
  const experience = route.params?.experience;
  console.log(experience);
  const accreditation = route.params?.accreditation;
  console.log(accreditation);
  const age = route.params?.age;
  console.log(age);
  const specialties = route.params?.specialties;
  console.log(specialties);
  const coachexperience = route.params?.coachexperience;
  console.log(coachexperience);
  const highlights = route.params?.highlights;
  console.log(highlights);
  const sessionplan = route.params?.sessionplan;
  console.log(sessionplan);
  const athleticbackground = route.params?.athleticbackground;
  console.log(athleticbackground);

  return (
    <View>
      <FlatList
        ListHeaderComponent={() => <Header />}
        data={data}
        renderItem={({ item, index }) => <View></View>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default AvailabilityScreen;