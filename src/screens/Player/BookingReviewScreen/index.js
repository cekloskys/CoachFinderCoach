import { View, Text, Pressable,TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { Rating as RatingComponent} from 'react-native-ratings';
import { DataStore } from 'aws-amplify';
import { Rating } from '../../../models';

const BookingReviewScreen = () => {
    const route = useRoute();
    const book = route.params?.book;
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [newRating, setNewRating] = useState();
   
    const navigation = useNavigation();
    console.log(book);
    

    const createNewRating = async () => {
        const newRating = await DataStore.save(new Rating({
            coachID: book.coachID,
            rating: rating,
            review: review,
            ratingBookingId: book.id
            
        }));
        setNewRating(newRating);
        navigation.navigate('Your Bookings');
    };

    return (
        <View style={styles.page}>
            <RatingComponent
                type='star'
                ratingCount={5}
                imageSize={65}
                showRating = {true}
                onFinishRating={setRating}
                fractions={1}
                style={styles.rating}
            />
            <TextInput
                value={review}
                onChangeText={value => setReview(value)}
                style={styles.input}
                clearButtonMode={'while-editing'}
                placeholder={"Leave a Review"}
                placeholderTextColor={'lightgrey'}
            />
            <Pressable
                style={styles.bookbutton} onPress={createNewRating}>
                <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
        </View> 
    );
}

export default BookingReviewScreen;