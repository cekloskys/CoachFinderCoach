import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'
import { useRoute } from '@react-navigation/native';

const BiographyScreen = () => {

  const navigation = useNavigation();
  const [highlights, setHighlights] = useState('');
  const [sessionplan, setSessionplan] = useState('');
  const [coachexperience, setCoachexperience] = useState(0);
  const [athleticbackground, setAthleticbackground] = useState('');

  const coachexperiences = [
    '1-3',
    '3-5',
    '5-8',
    '8-10',
    '10+',
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

  const onAddBiography = () => {
    /*
    if (!coachexperience || coachexperience === '0') {
      alert('Please enter years coaching experience.');
      return;
    }
    if (!highlights || highlights.length < 50) {
      alert('Please enter athletic highlights (minimum 50 characters).');
      return;
    }
    if (!sessionplan || sessionplan.length < 50) {
      alert('Please enter a session plan (minimum 50 characters).');
      return;
    }
    if (!athleticbackground || athleticbackground.length < 50) {
      alert('Please enter athletic background (minimum 50 characters).');
      return;
    }
    */
    
    navigation.navigate('Availability', {
      coachexperience: coachexperience,
      highlights: highlights,
      sessionplan: sessionplan,
      athleticbackground: athleticbackground,
    });
  }

  return (
    <ScrollView style={styles.page}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.text}>Years Coaching</Text>
        <View style={{ marginLeft: 'auto' }}>
          <NumericInput
            value={coachexperience}
            onChange={(text) => {
              setCoachexperience(text)
            }}
            rounded
            minValue={1} />
        </View>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.multilineinput}
          multiline={true}
          numberOfLines={4}
          placeholder='Enter Athletic Highlights'
          value={highlights}
          onChangeText={(text) => {
            setHighlights(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <Text style={{ textAlign: 'right', color: 'grey' }}>
          {highlights.length} characters (minimum 50 characters)
        </Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.multilineinput}
          multiline={true}
          placeholder='Enter Session Plan'
          value={sessionplan}
          onChangeText={(text) => {
            setSessionplan(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <Text style={{ textAlign: 'right', color: 'grey'}}>
          {sessionplan.length} characters (minimum 50 characters)
        </Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.multilineinput}
          multiline={true}
          placeholder='Enter Athletic Background'
          value={athleticbackground}
          onChangeText={(text) => {
            setAthleticbackground(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <Text style={{ textAlign: 'right', color: 'grey' }}>
          {athleticbackground.length} characters (minimum 50 characters)
        </Text>
      </View>
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onAddBiography}>
          <Text style={styles.buttonText}>Next</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default BiographyScreen;