import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const BiographyScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [highlights, setHighlights] = useState('');
  const [sessionplan, setSessionplan] = useState('');
  const [coachexperience, setCoachexperience] = useState('');
  const [athleticbackground, setAthleticbackground] = useState('');

  const onAddBiography = () => {
    if (!name){
      alert('Please enter your first and last name.')
      return;
    }
    if (!highlights){
      alert('Please enter athletic highlights.');
      return;
    }
    if (!sessionplan){
      alert('Please enter a session plan.');
      return;
    }
    if (!coachexperience){
      alert('Please enter coaching experience.');
      return;
    }
    if (!athleticbackground){
      alert('Please enter athletic background.');
      return;
    }

    navigation.navigate('Availability');
  }

    return (
        <View style={styles.page}>
          <TextInput
            value={name}
            onChangeText={value => setName(value)}
            style={styles.name}
            clearButtonMode={'while-editing'}
            placeholder={'First and Last Name'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={highlights}
            onChangeText={value => setHighlights(value)}
            style={styles.highlights}
            clearButtonMode={'while-editing'}
            placeholder={'Athletic Highlights'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={sessionplan}
            onChangeText={value => setSessionplan(value)}
            style={styles.sessionplan}
            clearButtonMode={'while-editing'}
            placeholder={'Session Plan'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={coachexperience}
            onChangeText={value => setCoachexperience(value)}
            style={styles.coachexperience}
            clearButtonMode={'while-editing'}
            placeholder={'Coaching Experience'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={athleticbackground}
            onChangeText={value => setAthleticbackground(value)}
            style={styles.athleticbackground}
            clearButtonMode={'while-editing'}
            placeholder={'Athletic Background'}
            placeholderTextColor={'grey'}
          />
          <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onAddBiography}>
            <Text style={styles.buttonText}>Next</Text>
        </Pressable>
    </View>
        </View>
      );
}

export default BiographyScreen;