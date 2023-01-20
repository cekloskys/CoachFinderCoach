import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const BiographyScreen = () => {

  const navigation = useNavigation();
  const [description, setDescription] = useState('');

    return (
        <View style={styles.page}>
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Athletic Highlights'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Session Plan'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Coaching Experience'}
            placeholderTextColor={'grey'}
          />
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Athletic Background'}
            placeholderTextColor={'grey'}
          />
          <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Availability')}>
            <Text style={styles.buttonText}>Next</Text>
        </Pressable>
    </View>
        </View>
      );
}

export default BiographyScreen;