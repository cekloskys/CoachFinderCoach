import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'

const BiographyScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [highlights, setHighlights] = useState('');
  const [sessionplan, setSessionplan] = useState('');
  const [coachexperience, setCoachexperience] = useState('');
  const [athleticbackground, setAthleticbackground] = useState('');

  const coachexperiences = [
    '1-3',
    '3-5',
    '5-8',
    '8-10',
    '10+',
  ];

  const onAddBiography = () => {
    /*
    if (!name) {
      alert('Please enter your first and last name.')
      return;
    }
    if (!highlights) {
      alert('Please enter athletic highlights.');
      return;
    }
    if (!sessionplan) {
      alert('Please enter a session plan.');
      return;
    }
    if (!coachexperience) {
      alert('Please enter coaching experience.');
      return;
    }
    if (!athleticbackground) {
      alert('Please enter athletic background.');
      return;
    }
    */
    navigation.navigate('Availability');
  }

  return (
    <ScrollView style={styles.page}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder='Full Name'
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.multilineinput}
          multiline={true}
          numberOfLines={4}
          placeholder='Athletic Highlights'
          value={highlights}
          onChangeText={(text) => {
            setHighlights(text);
          }}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.multilineinput}
          multiline={true}
          placeholder='Session Plan'
          value={sessionplan}
          onChangeText={(text) => {
            setSessionplan(text);
          }}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.text}>Coaching Experience</Text>
      <View style={{ marginLeft: 'auto'}}>
      <NumericInput
        value={0}
        onChange={(text) => {
          setExperience(text)
        }}
        rounded
        minValue={0} />
        </View>
        </View>
      <View style={styles.row}>
        <TextInput
          style={styles.multilineinput}
          multiline={true}
          placeholder='Athletic Background'
          value={athleticbackground}
          onChangeText={(text) => {
            setAthleticbackground(text);
          }}
        />
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