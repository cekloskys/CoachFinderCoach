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
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);
  const [sunday, setSunday] = useState([]);

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

  const formatAvailability = (dayStr) => {
    let dayArr = [];
    for (let i = 0; i < availability.length; i++) {
      if (availability[i].day === dayStr) {
        dayArr.push(availability[i]);
      }
    }
    var timeStr = dayArr.map((item) => {
      return item.time;
    }).join(", ");
    let timeObj = { time: timeStr };
    let displayArr = [];
    displayArr.push(timeObj);
    return displayArr;
  };

  useEffect(() => {
    availability.sort((a, b) => {
      if (a.day === b.day) {
        return a.time < b.time ? -1 : 1
      } else {
        return a.day < b.day ? -1 : 1
      }
    });

    setMonday(formatAvailability('Monday'));
    setTuesday(formatAvailability('Tuesday'));
    setWednesday(formatAvailability('Wednesday'));
    setThursday(formatAvailability('Thursday'));
    setFriday(formatAvailability('Friday'));
    setSaturday(formatAvailability('Saturday'));
    setSunday(formatAvailability('Sunday'));

  }, [availability]);

  return (
    <View style={styles.page}>
      <SectionList
        ListHeaderComponent={() => <Header coach={coach} />}
        ListFooterComponent={() =>
          <Pressable
            style={styles.button} onPress={() => navigation.navigate('Packages', { coach: coach })}>
            <Text style={styles.buttonText}>
              VIEW {coach.fullName?.toUpperCase()}{coach.fullName?.charAt(coach.fullName?.length - 1) === 's' ? "'" : "'s".toUpperCase()} PACKAGES
            </Text>
          </Pressable>
        }
        sections={[
          { title: 'Monday', data: monday },
          { title: 'Tuesday', data: tuesday },
          { title: 'Wednesday', data: wednesday },
          { title: 'Thursday', data: thursday },
          { title: 'Friday', data: friday },
          { title: 'Saturday', data: saturday },
          { title: 'Sunday', data: sunday },
        ]}
        renderItem={({ item }) => (
          <View style={styles.sectionContent}>
            <View style={{ width: '100%' }}>
              <Text style={{
                flexDirection: 'row',
                color: 'white',
                fontSize: 14,
                backgroundColor: '#909bad',
                padding: 10,
                borderRadius: 5,
                marginRight: 10,
                marginVertical: 2,
              }}>{item.time !== "" ? item.time : "Not Available"}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.completeContainer}>
            <View style={{ width: '100%' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{section.title}</Text>
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