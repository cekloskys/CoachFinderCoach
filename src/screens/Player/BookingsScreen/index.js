import { View, FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import BookingComponent from '../../../components/PlayerBooking';
import { DataStore } from 'aws-amplify';
import { Booking, Coach } from '../../../models';
import {useAuthContext} from '../../../context/AuthContext';

const BookingsScreen = () => {
  const [bookings, setBookings] = useState([]);
  const [finalBookings, setFinalBookings] = useState([]);

  const { dbUser } = useAuthContext();

  useEffect(() => {
    if (!dbUser){
      return;
    }
    DataStore.query(Booking, (b) => b.profileID.eq(dbUser.id)).then(setBookings);
  }, [dbUser])
  console.log(dbUser);
  
  useEffect(() => {
    if (!bookings) {
      return;
    }
    const fetchCoaches = async () => {
      const coaches = await DataStore.query(Coach);
      setFinalBookings(
        bookings.map(booking => ({
          ...booking,
          Coach: coaches.find(c => c.id == booking.coachID),
        }))
      );
    };
    fetchCoaches();
  }, [bookings]);

  if (dbUser && bookings.length === 0) {
    return (
      <ActivityIndicator size="large" color="#db4f40" style={{ flex: 1 }} />
    )
  }
  
  return (
    <View style={styles.page}>
      <FlatList
        data={finalBookings}
        renderItem={({ item, index }) => <BookingComponent book={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default BookingsScreen;