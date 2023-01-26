import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const navigation = useNavigation();

    return (
        <View style={styles.page}>
          <SafeAreaView style={{flex: 0.0}} />
          <View style={styles.header}>
            <Text style={styles.title}>
              Your Profile
            </Text>
          </View>
        </View>
      );
}

export default ProfileScreen;