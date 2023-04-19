import { View, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import styles from './styles';
import { useState, useEffect, useCallback } from 'react';
import BookingComponent from '../../../components/PlayerBooking';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Booking, Coach } from '../../../models';
import { useAuthContext } from '../../../context/AuthContext';

const BookingsScreen = () => {
  const [bookings, setBookings] = useState([]);
  const [finalBookings, setFinalBookings] = useState([]);
  const [sortedFinalBookings, setSortedFinalBookings] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  const { dbUser } = useAuthContext();

  useEffect(() => {
    if (!dbUser) {
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

  useEffect(() => {
    if (!finalBookings) {
      return;
    }
    const sorted = finalBookings.sort((d1, d2) => new Date(d2.createdAt).getTime() - new Date(d1.createdAt).getTime());
    setSortedFinalBookings(sorted);
  }, [finalBookings]);

  const onRefresh = useCallback(async () => {
    if (!bookings) {
      return;
    }
    setRefreshing(true);
    try {
      DataStore.query(Booking, (b) => b.profileID.eq(dbUser.id)).then(setBookings);
      const coaches = await DataStore.query(Coach);
      setFinalBookings(
        bookings.map(booking => ({
          ...booking,
          Coach: coaches.find(c => c.id == booking.coachID),
        }))
      );
      const sorted = finalBookings.sort((d1, d2) => new Date(d2.createdAt).getTime() - new Date(d1.createdAt).getTime());
      setSortedFinalBookings(sorted);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing, bookings]);


  if (dbUser && bookings.length === 0) {
    return (
      <ActivityIndicator size="large" color="#db4f40" style={{ flex: 1 }} />
    )
  }

  return (
    <View style={styles.page}>
      <FlatList
        data={sortedFinalBookings}
        renderItem={({ item, index }) => <BookingComponent book={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default BookingsScreen;