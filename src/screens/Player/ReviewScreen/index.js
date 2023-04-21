import { View, Text, SectionList, Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import styles from './styles';
import Header from './header';
import { Ionicons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { Rating } from '../../../models';


const ReviewsScreen = () => {

  const[ratings, setRatings] = useState([])
  const [reviews, setReviews] = useState([]);
  

  const route = useRoute();
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('Availability',{coach : coach});
  };

  const coach = route.params?.coach;

  useEffect(() => {
    if (!coach) {
      return;
    }
    DataStore.query(Rating, (r) => r.coachID.eq(coach.id)).then(setRatings);
  }, [coach]);

  

  useEffect(() => {
    if (!ratings) {
      return;
    }
    const display = [];
    for (let i = 0; i < ratings.length; i++) {
      display.push(ratings[i].review);
    }
    display.sort();
    setReviews(display);  
    
  }, [ratings]);
  

  return (
    <View style={styles.page}>
      <SectionList
        ListHeaderComponent={() => <Header coach={coach} />}
        ListFooterComponent={() =>
          <Pressable
            style={styles.button} onPress={() => navigation.navigate('Packages', { coach: coach })}>
            <Text style={styles.buttonText}>
              VIEW {coach.fullName?.toUpperCase()}{coach.fullName?.charAt(coach.fullName?.length - 1) === 's' ? "'" : "'s".toUpperCase()} PACKAGES
            </Text>
          </Pressable>
        }
        sections={[
          { title: 'Reviews', data: ratings},
          
        ]}
        
        renderItem={({ item }) => (
          <View style={styles.sectionContent}>
            <View style={{ width: '100%' }}>
              <Text style={{
                flexDirection: 'row',
                color: 'white',
                fontSize: 14,
                backgroundColor: '#909bad',
                padding: 10,
                borderRadius: 5,
                marginRight: 10,
                marginVertical: 2,
              }}>{item.review}</Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.completeContainer}>
            <View style={{ width: '100%' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{section.title}</Text>
            </View>
          </View>
        )}
      />
      <Ionicons
        name='arrow-back-circle'
        size={45}
        color='white'
        style={styles.iconContainer}
        onPress={onPress}
      />
    </View>
  );
}

export default ReviewsScreen;