import { View, Text, Image, Pressable } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Package, Booking } from '../../../models';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useStripe } from '@stripe/stripe-react-native';
import { createPaymentIntent } from '../../../graphql/mutations'
import { API, graphqlOperation } from 'aws-amplify';

const BookingDetailScreen = () => {

  const navigation = useNavigation();

  const route = useRoute();
  const book = route.params?.book;

  const [packages, setPackages] = useState({});
  const [clientSecret, setClientSecret] = useState('');

  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  useEffect(() => {
    if (!book) {
      return;
    }
    DataStore.query(Package, book.packageID).then(setPackages);
  }, [book]);

  const goToReview = () => {
    navigation.navigate('Review Booking', { book: book });
  };

  useEffect(() => {
    if (book.status === 'IN_PROGRESS' && packages.price){
      fetchPaymentIntent();
    }
  }, [packages.price, book.status]);

  useEffect(() => {
    if (clientSecret) {
      initializePaymentSheet();
    }
  }, [clientSecret]);

  const fetchPaymentIntent = async () => {
    const amount = Math.floor(packages.price * 100);
    const response = await API.graphql(
      graphqlOperation(createPaymentIntent, { amount }),
    );
    setClientSecret(response.data.createPaymentIntent.clientSecret);
  };

  const initializePaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const { error } = await initPaymentSheet({
      merchantDisplayName: 'CoachFinder',
      paymentIntentClientSecret: clientSecret,
    });

  

  };

  const openPaymentSheet = async () => {
    if (!clientSecret) {
      return;
    }
    const { error } = await presentPaymentSheet({ clientSecret });

    if (error) {
      alert(`${error.code}`, error.message + '.');
    } else {
      const booking = await DataStore.query(Booking, book.id);
      await DataStore.save(
        Booking.copyOf(booking,(updated)=>{
          updated.status = 'PAID';
        })
      );
      alert('The payment has been confirmed.');
      navigation.navigate('Your Bookings');
    }
  };

  const payment = () => {
    openPaymentSheet();
  };

  const onPress = () => {
    navigation.navigate('Your Bookings');
  };

  return (
    <ScrollView style={styles.page}>
      <Image
        source={{
          uri: book.Coach.image
        }}
        style={styles.image} />
      <View style={{ margin: 10 }}>
        <Text style={styles.title}>{book.Coach.fullName}</Text>
        <Text style={{ fontSize: 18, fontWeight: '500', marginBottom: 10, }}>Booking Details</Text>
        <Text style={{ fontSize: 14, fontWeight: '600' }}>Coach Contact Information</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#909bad',
          padding: 10,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginTop: 5,
        }}>
          <Text style={styles.subtitle}>Phone</Text>
          <Text style={styles.subtitledetail}>{book.Coach.phoneNbr}</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#909bad',
          padding: 10,
          marginBottom: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
          <Text style={styles.subtitle}>Email</Text>
          <Text style={styles.subtitledetail}>{book.Coach.email}</Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 10 }}>Starting Session</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#909bad',
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
          backgroundColor: '#909bad',
          padding: 10,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          marginBottom: 5,
        }}>
          <Text style={styles.subtitle}>Time</Text>
          <Text style={styles.subtitledetail}>{book.startTime}</Text>
        </View>
        <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 10 }}>Package Details</Text>
        <View style={{
          flexDirection: 'row',
          backgroundColor: '#909bad',
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
          backgroundColor: '#909bad',
          padding: 10,
        }}>
          <Text style={styles.subtitle}>Price</Text>
          <Text style={styles.subtitledetail}>$ {packages.price}</Text>
        </View>
        <View style={{
          backgroundColor: '#909bad',
          padding: 10,
          marginBottom: 5,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}>
          <Text style={styles.subtitle}>Details</Text>
          <Text style={styles.subtitledetail2}>{packages.shortDesc} {packages.longDesc}</Text>
        </View>
      </View>
      {book.status === 'COMPLETED' &&
        <Pressable
          style={styles.bookbutton} onPress={goToReview} >
          <Text style={styles.buttonText}>LEAVE A REVIEW</Text>
        </Pressable>
      }
      {book.status === 'IN_PROGRESS' &&
        <Pressable
          style={styles.bookbutton} onPress={payment}>
          <Text style={styles.buttonText}>MAKE PAYMENT</Text>
        </Pressable>
      }
      <Ionicons
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
        onPress={onPress}
      />
    </ScrollView>
  )
};
export default BookingDetailScreen;