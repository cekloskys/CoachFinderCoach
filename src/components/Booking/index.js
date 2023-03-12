import { View, Pressable, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Booking = ({ book }) => {

  const navigation = useNavigation();
  
  const onPress = () => {
    navigation.navigate('Booking', { book : book });
  };

  return (
    <Pressable style={{flexDirection: 'row', margin: 10, alignItems: 'center',}} onPress={onPress}>
        <Image
        source={require('../../../assets/logo.png')}
        style={{width: 100, height: 100, marginRight: 10, borderRadius: 5}} />
        <View>
          <Text style={{fontWeight: '600', fontSize: 18,}}>{book.athleteName}</Text>
          <Text style={{fontWeight: '600', fontSize: 14,}}>Starting Session</Text>
          <Text style={{ color: 'grey', fontSize: 14,}}>
            Date &#8226; {book.startDate}
          </Text>
          <Text style={{ color: 'grey', fontSize: 14,}}>
            Time &#8226; {book.startTime}
          </Text>
        </View>
    </Pressable>
  );
}

export default Booking;