import { View, Text, SectionList, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import styles from './styles';
import Header from './header';
import { Ionicons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { Coach, Accreditation, AccreditationCoach, Age, AgeCoach, Position, PositionCoach, Speciality, SpecialityCoach } from '../../../models';

const CoachProfileScreen = () => {

  const [coach, setCoach] = useState({});
  const [accreditations, setAccreditations] = useState([]);
  const [ages, setAges] = useState([]);
  const [positions, setPositions] = useState([]);
  const [specialities, setSpecialities] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Search Coaches');
  };

  const id = route.params?.id;

  const getAccreditations = async () => {
    let accreditationCoaches = await DataStore.query(AccreditationCoach, (ac) => ac.coachID.eq(id));
    let accreds = await DataStore.query(Accreditation);
    const display = [];
    accreditationCoaches.map(accreditationCoach => {
      let accred = accreds.find(a => a.id == accreditationCoach.accreditationCoachAccreditationId)
      if (accred.name) {
        display.push(accred);
      }
    })
    setAccreditations(display);
  };

  const getAges = async () => {
    let ageCoaches = await DataStore.query(AgeCoach, (ac) => ac.coachID.eq(id));
    let ages = await DataStore.query(Age);
    const display = [];
    ageCoaches.map(ageCoach => {
      let age = ages.find(a => a.id == ageCoach.ageCoachAgeId)
      if (age.name) {
        display.push(age);
      }
    })
    setAges(display);
  };

  const getPositions = async () => {
    let positionCoaches = await DataStore.query(PositionCoach, (pc) => pc.coachID.eq(id));
    let positions = await DataStore.query(Position);
    const display = [];
    positionCoaches.map(positionCoach => {
      let position = positions.find(p => p.id == positionCoach.positionCoachPositionId)
      if (position.name) {
        display.push(position);
      }
    })
    setPositions(display);
  };

  const getSpecialities = async () => {
    let specialityCoaches = await DataStore.query(SpecialityCoach, (sc) => sc.coachID.eq(id));
    let specialities = await DataStore.query(Speciality);
    const display = [];
    specialityCoaches.map(specialityCoach => {
      let speciality = specialities.find(s => s.id == specialityCoach.specialityCoachSpecialityId)
      if (speciality.name) {
        display.push(speciality);
      }
    })
    setSpecialities(display);
  };

  useEffect(() => {
    DataStore.query(Coach, id).then(setCoach);
    getAccreditations();
    getAges();
    getPositions();
    getSpecialities();
  }, []);

  return (
    <View style={styles.page}>
      <SectionList
        ListHeaderComponent={() => <Header coach={coach} />}
        ListFooterComponent={() =>
          <Pressable
          style={styles.button} onPress={() => navigation.navigate('Availability', {coach: coach})}>
            <Text style={styles.buttonText}>
              View {coach.fullName}{coach.fullName?.charAt(coach.fullName?.length - 1) === 's' ? "'" : "'s"} Availability
            </Text>
          </Pressable>
        }
        sections={[{ title: 'Accreditations', data: accreditations },
        { title: 'Ages', data: ages },
        { title: 'Positions', data: positions },
        { title: 'Specialities', data: specialities },
        ]}
        renderItem={({ item }) => (
          <View style={styles.sectionContent}>
            <View style={{ width: '100%', }}>
              <Text style={{
                color: 'grey',
                fontSize: 16,
                backgroundColor: 'white',
                padding: 5,
                borderRadius: 5,
                marginRight: 10,
                marginVertical: 2,
              }}>{item.name}</Text>
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

export default CoachProfileScreen;