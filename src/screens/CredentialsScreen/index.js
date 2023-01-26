import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const CredentialsScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [college, setCollege] = useState('');
  const [experience, setExperience] = useState('');
  const [accreditations, setAccreditations] = useState('');
  const [age, setAge] = useState('');
  const [specialties, setSpecialties] = useState('');
  // const [Credentials, setCredentials] = useState('');

  const onAddCredentials = () => {
    if (!college){
      alert('Please enter a school.');
      return;
    }
    if (!experience){
      alert('Please enter your experience.');
      return;
    }
    if (!accreditations){
      alert('Please enter accreditations.');
      return;
    }
    if (!age){
      alert('Please enter an age range.');
      return;
    }
    if (!specialties){
      alert('Please enter specialties.')
    }

    navigation.navigate('Biography');
  }

    return (
        <View style={styles.page}>
          <TextInput
            value={college}
            onChangeText={value => setCollege(value)}
            style={styles.college}
            clearButtonMode={'while-editing'}
            placeholder={'College'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={experience}
            onChangeText={value => setExperience(value)}
            style={styles.experience}
            clearButtonMode={'while-editing'}
            placeholder={'Experience'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={accreditations}
            onChangeText={value => setAccreditations(value)}
            style={styles.accreditations}
            clearButtonMode={'while-editing'}
            placeholder={'Accreditations'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={age}
            onChangeText={value => setAge(value)}
            style={styles.age}
            clearButtonMode={'while-editing'}
            placeholder={'Age preference'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={specialties}
            onChangeText={value => setSpecialties(value)}
            style={styles.specialties}
            clearButtonMode={'while-editing'}
            placeholder={'Specialties'}
            placeholderTextColor={'grey'}
          />
        <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onAddCredentials}>
            <Text style={styles.buttonText}>Next</Text>
        </Pressable>
    </View>
        </View>
      );
}

export default CredentialsScreen;