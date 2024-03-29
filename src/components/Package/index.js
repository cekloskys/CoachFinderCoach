import { View, Pressable, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Package = ({ pack }) => {
  const navigation = useNavigation();
  
  const onPress = () => {
    navigation.navigate('Book Package', {pack : pack})
  };

  return (
    <Pressable style={{ flexDirection: 'row', margin: 10, alignItems: 'center', }} onPress={onPress}>
      <Image
        source={require('../../../assets/logo.png')}
        style={{ width: 75, height: 75, marginRight: 10, borderRadius: 5 }} />
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