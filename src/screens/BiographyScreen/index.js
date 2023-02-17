import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import NumericInput from 'react-native-numeric-input'

const BiographyScreen = () => {

  const navigation = useNavigation();
  const [name, setName] = useState('');
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
    
    navigation.navigate('Availability');
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