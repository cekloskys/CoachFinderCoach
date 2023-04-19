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

  return (
    <Pressable style={{ flexDirection: 'row', alignItems: 'center', }} onPress={onPress}>
      <Image
        source={{ uri: coach.image }}
        style={{ width: 80, height: 80, marginRight: 10, borderRadius: 5 }} />
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontWeight: '600', fontSize: 18, }}>{coach.fullName}</Text>
          <RatingComponent
            type='star'
            ratingCount={5}
            imageSize={15}
            showRating={false}
            fractions={1}
            startingValue={avgRating === 0.0 ? 0.0 : avgRating}
            readonly={true}
            style={styles.rating}
          />
        </View>
        <Text style={{ color: 'grey', fontSize: 14, }}>
          {coach.shortDesc}
        </Text>
        <Text style={{ color: 'grey', fontSize: 14, }}>
          Location &#8226; {coach.state}
        </Text>
      </View>
    </Pressable>
  );
}

export default Coach;