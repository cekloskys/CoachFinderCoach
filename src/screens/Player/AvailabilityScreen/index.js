import { View, Text, SectionList, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import styles from './styles';
import Header from './header';
import { Ionicons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { Availability } from '../../../models';

const AvailabilityScreen = () => {

  const [availability, setAvailability] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Coach Profile');
  };

  const coach = route.params?.coach;


  useEffect(() => {
    if (!coach) {
      return;
    }
    DataStore.query(Availability, (a) => a.coachID.eq(coach.id)).then(setAvailability);
  }, [coach]);

  useEffect(() => {
    const times = [];
    availability.sort((a, b) => {
      if (a.day === b.day){
        return a.time < b.time ? -1 : 1
      } else {
        return a.day < b.day ? -1 : 1
      }
    });

  }, [availability]);

  return (
    <View style={styles.page}>
      <SectionList
        ListHeaderComponent={() => <Header coach={coach} />}
        ListFooterComponent={() =>
          <Pressable
            style={styles.button} onPress={() => navigation.navigate('Packages')}>
            <Text style={styles.buttonText}>
              View {coach.fullName}{coach.fullName?.charAt(coach.fullName?.length - 1) === 's' ? "'" : "'s"} Packages
            </Text>
          </Pressable>
        }
        sections={[{ title: 'Availability', data: availability },
        ]}
        renderItem={({ item }) => (
          <View style={styles.sectionContent}>
            <View style={{
              flexDirection: 'row',
              color: 'grey',
              fontSize: 16,
              backgroundColor: 'white',
              padding: 5,
              borderRadius: 5,
              marginRight: 10,
              marginVertical: 2,
            }}>
              <Text style={styles.subtitle}>{item.days}</Text>
              <Text style={styles.subtitledetail}>{item.times}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.completeContainer}>
            <View style={{ width: '100%' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{section.title}</Text>
            </View>
          </View>
        )}
      />
      <Ionicons
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
        onPress={onPress}
      />
    </View>
  );
}

export default AvailabilityScreen;