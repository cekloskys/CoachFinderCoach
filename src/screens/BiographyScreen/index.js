import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const BiographyScreen = () => {

  const navigation = useNavigation();
  const [highlights, setHighlights] = useState('');
  const [sessionplan, setSessionplan] = useState('');
  const [athleticbackground, setAthleticbackground] = useState('');
  const [description, setDescription] = useState('');

  const [college, setCollege] = useState('');

  const route = useRoute();

  const sport = route.params?.sport;
  const position = route.params?.position;
  const name = route.params?.name;
  const phoneInput = route.params?.phoneInput;
  const date = route.params?.date;
  const gender = route.params?.gender;
  const address = route.params?.address;
  const city = route.params?.city;
  const state = route.params?.state;
  const zip = route.params?.zip;
  const email = route.params?.email;
  const coachexperience = route.params?.coachexperience;
  const experience = route.params?.experience;
  const accreditation = route.params?.accreditation;
  const age = route.params?.age;
  const specialties = route.params?.specialties;

  const onAddBiography = () => {
    if (!college){
      alert('Please enter your college.');
      return;
    }
    if (!description || description.length < 25) {
      alert('Please enter your coach description (minimum 25 characters).');
      return;
    }
    if (!highlights || highlights.length < 50) {
      alert('Please enter your athletic highlights (minimum 50 characters).');
      return;
    }
    if (!sessionplan || sessionplan.length < 50) {
      alert('Please enter your session plan (minimum 50 characters).');
      return;
    }
    if (!athleticbackground || athleticbackground.length < 50) {
      alert('Please enter your athletic background (minimum 50 characters).');
      return;
    }
    
    navigation.navigate('Availability', {
      sport: sport,
      position: position,
      name: name,
      //phoneInput: phoneInput.current.getValue(),
      phoneInput: phoneInput,
      date: date,
      gender: gender,
      address: address,
      city: city,
      state: state,
      zip: zip,
      email: email,
      college: college,
      experience: experience,
      accreditation: accreditation,
      age: age,
      specialties: specialties,
      coachexperience: coachexperience,
      highlights: highlights,
      sessionplan: sessionplan,
      athleticbackground: athleticbackground,
      description: description,
    });
  }

  return (
    <ScrollView style={styles.page}>
      <TextInput
        style={styles.input}
        placeholder='Enter College'
        value={college}
        onChangeText={(text) => {
          setCollege(text);
        }}
      />
      <View style={styles.row}>
        <TextInput
          style={styles.description}
          multiline={true}
          numberOfLines={2}
          placeholder='Enter Coach Description'
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <Text style={{ textAlign: 'right', color: 'grey' }}>
          {description.length} characters (minimum 25 characters)
        </Text>
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