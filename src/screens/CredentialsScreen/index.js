import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const CredentialsScreen = () => {

  const navigation = useNavigation();
  const [description, setDescription] = useState('');

    return (
        <View style={styles.page}>
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'College'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Experience'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Accreditations'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Age preference'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Specialties'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Credentials'}
            placeholderTextColor={'grey'}
          />
        <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Biography')}>
            <Text style={styles.buttonText}>Next</Text>
        </Pressable>
    </View>
        </View>
      );
}

export default CredentialsScreen;