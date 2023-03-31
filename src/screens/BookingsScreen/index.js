import { View, FlatList, RefreshControl } from 'react-native';
import styles from './styles';
import { useState, useEffect, useCallback } from 'react';
import BookingComponent from '../../components/Booking';
import { DataStore } from 'aws-amplify';
import { Booking, Coach } from '../../models';
import { useCoachContext } from '../../context/CoachContext';

const BookingsScreen = () => {

  const [bookings, setBookings] = useState([]);
  const [finalBookings, setFinalBookings] = useState([]);

  const { coachDBUser } = useCoachContext();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    DataStore.query(Booking, (b) => b.coachID.eq(coachDBUser.id)).then(setBookings);
  }, [])

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

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      const coaches = await DataStore.query(Coach);
      setFinalBookings(
        bookings.map(booking => ({
          ...booking,
          Coach: coaches.find(c => c.id == booking.coachID),
        }))
      );
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  return (
    <View style={styles.page}>
      <FlatList
        data={finalBookings}
        renderItem={({ item, index }) => <BookingComponent book={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default BookingsScreen; 