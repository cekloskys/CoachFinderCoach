import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const AddressScreen = () => {

  const navigation = useNavigation();
  // const [description, setDescription] = useState('');
  const [address, setAddress] = useState('');

    return (
        <View style={styles.page}>
          <TextInput
            value={address}
            onChangeText={value => setAddress(value)}
            style={styles.address}
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