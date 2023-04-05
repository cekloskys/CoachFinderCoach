import { View, Text, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Package, Profile, Booking } from '../../models';
import { ScrollView } from 'react-native-gesture-handler';

const BookingDetailScreen = () => {

  const navigation = useNavigation();

  const route = useRoute();
  const book = route.params?.book; 

  const [packages, setPackages] = useState({});
  const [profiles, setProfiles] = useState({});

  useEffect(() => {
    if (!book) {
      return;
    }
    DataStore.query(Package, book.packageID).then(setPackages);
  }, [book]);

  useEffect(() => {
    if (!book) {
      return;
    }
    DataStore.query(Profile, book.profileID).then(setProfiles);
    
  }, [book]);
  

  const accept = async () => {
    const booking = await DataStore.query(Booking, book.id);
    await DataStore.save(
      Booking.copyOf(booking, (updated) => {
        updated.status = 'PENDING';
      })
    );
    alert('Booking accepted.')
    navigation.navigate('Your Bookings');
  };

  const decline = async() => {
    const booking = await DataStore.query(Booking, book.id);
    await DataStore.save(
      Booking.copyOf(booking,(updated)=>{
        updated.status = 'DECLINED';
      })
    );
    alert('Booking declined.')
    navigation.navigate('Your Bookings');
  };

  const cancel = async () => {
    const booking = await DataStore.query(Booking, book.id);
    await DataStore.save(
      Booking.copyOf(booking,(updated)=>{
        updated.status = 'CANCELLED';
      })
    );
    alert('Booking cancelled.')
    navigation.navigate('Your Bookings');
  };

  const complete = async () => {
    const booking = await DataStore.query(Booking, book.id);
    await DataStore.save(
      Booking.copyOf(booking,(updated)=>{
        updated.status = 'COMPLETED';
      })
    );
    alert('Booking completed.')
    navigation.navigate('Your Bookings');
  };

    return (
      <ScrollView style={styles.page}>
      <View style={{ margin: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '500', }}>Booking Details</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
          marginVertical: 5,
        }}>
          <Text style={styles.subtitle}>Athlete</Text>
          <Text style={styles.subtitledetail}>{book.athleteName}</Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10}}>Requested Start Session</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginTop: 5,
        }}>
          <Text style={styles.subtitle}>Date</Text>
          <Text style={styles.subtitledetail}>{book.startDate}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          marginBottom: 5,
        }}>
          <Text style={styles.subtitle}>Time</Text>
          <Text style={styles.subtitledetail}>{book.startTime}</Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10}}>Package Details</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          marginTop: 5,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}>
          <Text style={styles.subtitle}>Name</Text>
          <Text style={styles.subtitledetail}>{packages.name}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
        }}>
          <Text style={styles.subtitle}>Price</Text>
          <Text style={styles.subtitledetail}>$ {packages?.price?.toFixed(2)}</Text>
        </View>
        <View style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
          <Text style={styles.subtitle}>Details</Text>
          <Text style={styles.subtitledetail2}>{packages.shortDesc} {packages.longDesc}</Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 10}}>Athlete Contact Information</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginTop: 5,
        }}>
          <Text style={styles.subtitle}>Phone</Text>
          <Text style={styles.subtitledetail}>{profiles.phoneNbr}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
          <Text style={styles.subtitle}>Email</Text>
          <Text style={styles.subtitledetail}>{profiles.email}</Text>
        </View>
        <Pressable style={styles.button} onPress={accept}>
          <Text style={styles.buttonText}>Accept</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={decline}>
          <Text style={styles.buttonText}>Decline</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={cancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={complete}>
          <Text style={styles.buttonText}>Completed</Text>
        </Pressable>
      </View>
    </ScrollView>
      );
}
 
export default BookingDetailScreen;