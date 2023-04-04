import { View, Pressable, Image, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Rating } from '../../models';
import { Rating as RatingComponent } from 'react-native-ratings';

const Coach = ({ coach }) => {
  const navigation = useNavigation();
  const [coachRatings, setCoachRatings] = useState([]);
  const [avgRating, setAvgRating] = useState(0.0);

  useEffect(() => {
    if (!coach) {
      return;
    }

    const fetchRatings = async (coach) => {
      setAvgRating(0.0);
      await DataStore.query(Rating, (r) => r.coachID.eq(coach.id)).then(setCoachRatings);
    }

    fetchRatings(coach);
  }, [coach]);

  const getAvgRating = async () => {
    const sum = coachRatings.reduce((a, ratings) => a + ratings?.rating, 0);
    const length = coachRatings.length;
    const avg = sum / length;
    setAvgRating(avg);
  }

  useEffect(() => {
    if (coachRatings.length === 0) {
      return;
    }
    getAvgRating();
  }, [coachRatings]);

  const onPress = () => {
    navigation.navigate('Coach Profile', { id: coach.id })
  };

  console.log(avgRating);

  return (
    <Pressable style={styles.restaurantContainer} onPress={onPress}>
      <Image
        source={{ uri: coach.image }}
        style={styles.image} />
      <View>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.title}>
              {coach.fullName}
            </Text>
            <RatingComponent
              type='star'
              ratingCount={5}
              imageSize={25}
              showRating={false}
              fractions={1}
              startingValue={avgRating === 0.0 ? 0.0 : avgRating}
              readonly={true}
              style={styles.rating}
            />
          </View>
          <Text style={styles.subtitle}>
            {coach.shortDesc}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.subtitle}>Starting Price &#8226; </Text>
            <Text style={styles.subtitle}>$ {coach.startPrice}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.subtitle}>Location &#8226; </Text>
            <Text style={styles.subtitle}>{coach.city}, {coach.state}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default Coach;