import { View, Pressable, Text, Image } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Package = ({ pack }) => {
  const navigation = useNavigation();
  
  const onPress = () => {
    navigation.navigate('Book Package', { id: pack.id })
  };

  return (
    <Pressable style={{ flexDirection: 'row', margin: 10, alignItems: 'center', }} onPress={onPress}>
      <Image
        source={require('../../../assets/logo.png')}
        style={{ width: 100, height: 100, marginRight: 10, borderRadius: 5 }} />
      <View style={{flex: 1}}>
        <Text style={{ fontWeight: '600', fontSize: 18, }}>{pack.name} </Text>
        <Text style={{ color: 'grey', fontSize: 14, }}>
          Price &#8226; $ {pack.price}
        </Text>
        <Text style={{ color: 'grey', fontSize: 14 }}>
          {pack.longDesc}
        </Text>
      </View>
    </Pressable>
  );
}

export default Package;