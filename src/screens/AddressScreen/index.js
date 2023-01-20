import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const AddressScreen = () => {

  const navigation = useNavigation();
  const [description, setDescription] = useState('');

    return (
        <View style={styles.page}>
          <TextInput
            value={description}
            onChangeText={value => setDescription(value)}
            style={styles.description}
            clearButtonMode={'while-editing'}
            placeholder={'Address'}
            placeholderTextColor={'grey'}
          />
        <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Credentials')}>
            <Text style={styles.buttonText}>Next</Text>
        </Pressable>
    </View>
    </View>
      );
}

export default AddressScreen;