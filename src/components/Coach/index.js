import { View, Pressable, Image, Text } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Rating } from '../../models';
import { useState } from 'react';
import { useEffect } from 'react';
import { DataStore } from 'aws-amplify';


const Coach = ({ coach }) => {
  const navigation = useNavigation();
  const [ratings, setRatings] = useState([]);
  const fetchRatings = async (coach) => {
  await DataStore.query(Rating, (r) => r.coachID.eq(coach.id)).then(setRatings);
  }
  useEffect(() => {
    if(!coach){
      return;
    }
    fetchRatings(coach);
    console.log("rate");
    console.log(ratings);

    
  }, [coach])
  
  const onPress = () => {
    navigation.navigate('Coach Profile', { id: coach.id })
  }; 
 
  return (
    <Pressable style={styles.restaurantContainer} onPress={onPress}>
      <Image
        source={{ uri: coach.image }}
        style={styles.image} />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>
            {coach.fullName}
          </Text>
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
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.rating}></Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

export default Coach;