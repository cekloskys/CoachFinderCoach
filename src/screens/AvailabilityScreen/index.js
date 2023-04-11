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

  const coach = {
    sport: route.params?.sport,
    position: route.params?.position, 
    name: route.params?.name, 
    phoneInput: route.params?.phoneInput, 
    date: route.params?.date, 
    image: route.params?.image, 
    address: route.params?.address, 
    city: route.params?.city, 
    state: route.params?.state, 
    zip: route.params?.zip, 
    email: route.params?.email,
    college: route.params?.college, 
    experience: route.params?.experience, 
    accreditation: route.params?.accreditation, 
    age: route.params?.age, 
    specialties: route.params?.specialties, 
    coachexperience: route.params?.coachexperience, 
    highlights: route.params?.highlights, 
    sessionplan: route.params?.sessionplan, 
    athleticbackground: route.params?.athleticbackground,
    description: route.params?.description,
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        ListHeaderComponent={() => <Header coach={coach}/>}
        data={data}
        renderItem={({ item, index }) => <View></View>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default AvailabilityScreen;