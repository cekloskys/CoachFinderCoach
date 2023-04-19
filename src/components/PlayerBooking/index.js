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
        style={{width: 75, height: 75, marginRight: 10, borderRadius: 5}} />
        <View style={{flex: 1}}>
          <Text style={{fontWeight: '600', fontSize: 18,}}>{book.athleteName}</Text>
          <Text style={{ color: 'grey', fontSize: 14,}}>
          Requested Start Session &#8226; {book.startDate}
          </Text>
          <Text style={{ color: 'grey', fontSize: 14,}}>
            Status &#8226; {book.status}
          </Text>
        </View>
    </Pressable>
  );
}

export default Booking;