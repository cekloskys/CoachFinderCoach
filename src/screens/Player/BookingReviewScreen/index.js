import { View, Text, Pressable,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useState } from 'react';
import { Rating } from 'react-native-ratings';


const BookingReviewScreen = () => {
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.page}>
            <Rating
                type='star'
                ratingCount={5}
                imageSize={60}
                showRating = {true}
                onFinishRating={setRating}
                
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
                style={styles.bookbutton} onPress={navigation.navigate('Your Bookings')}>
                <Text style={styles.buttonText}>Submit Review</Text>
            </Pressable>
        </View>
    );
}
export default BookingReviewScreen;