import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Header = ({ coach }) => {

  return (
    <View style={styles.page}>
      <Image
        source={{ uri: coach.image }}
        style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>{coach.fullName}</Text>
        <Text style={styles.subtitle}>
          {coach.shortDesc}
        </Text>
        <Text style={{fontSize: 16, fontWeight: '600',}}>Details</Text>
        <View style={{ 
          flexDirection: 'row', 
          backgroundColor: 'white', 
          padding: 10, 
          borderRadius: 5, 
          marginVertical: 5,
        }}>
          <Text style={styles.subtitle2}>Starting Price</Text>
          <Text style={styles.subtitledetail}>$ {coach.startPrice}</Text>
        </View>
        <View style={{ 
          flexDirection: 'row', 
          backgroundColor: 'white', 
          padding: 10, 
          borderRadius: 5, 
          marginVertical: 5,
        }}>
          <Text style={styles.subtitle2}>Location</Text>
          <Text style={styles.subtitledetail}>{coach.city}, {coach.state}</Text>
        </View>
        <View style={{ 
          backgroundColor: 'white', 
          padding: 10, 
          borderRadius: 5, 
          marginVertical: 5,
        }}>
          <Text style={styles.subtitle2}>College</Text>
          <Text style={styles.subtitledetail2}>{coach.college}</Text>
        </View>
        <View style={{ 
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          marginTop: 5,
        }}>
          <Text style={styles.subtitle2}>Years Playing</Text>
          <Text style={styles.subtitledetail}>{coach.yearsPlaying}</Text>
        </View>
        <View style={{ 
          flexDirection: 'row',
          backgroundColor: 'white',
          padding: 10,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          marginBottom: 5,
        }}>
          <Text style={styles.subtitle2}>Years Coaching</Text>
          <Text style={styles.subtitledetail}>{coach.yearsCoaching}</Text>
        </View> 
        <View style={{ 
          backgroundColor: 'white', 
          padding: 10, 
          borderRadius: 5, 
          marginVertical: 5,
        }}>
          <Text style={styles.subtitle2}>Session Plan</Text>
          <Text style={styles.subtitledetail2}>{coach.sessionPlan}</Text>
        </View>
        <View style={{ 
          backgroundColor: 'white', 
          padding: 10, 
          borderRadius: 5, 
          marginVertical: 5,
        }}>
          <Text style={styles.subtitle2}>Athletic Highlights</Text>
          <Text style={styles.subtitledetail2}>{coach.highlights}</Text>
        </View>
        <View style={{ 
          backgroundColor: 'white', 
          padding: 10, 
          borderRadius: 5, 
          marginVertical: 5,
        }}>
          <Text style={styles.subtitle2}>Background</Text>
          <Text style={styles.subtitledetail2}>{coach.background}</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;