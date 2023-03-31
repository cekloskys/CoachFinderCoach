import { View, Pressable, Text, Image, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { Package as Packages } from '../../models';
import { usePackageContext } from '../../context/PackageContext';
import { useCallback } from 'react';

const Package = ({ pack }) => {
  const navigation = useNavigation();
  
  const {packages, setPackages, fetchPackages} = usePackageContext();

  const onPress = () => {
   navigation.navigate('Edit Package', { pack:pack })
  };

  const deletePackage = async() => {
    await DataStore.delete(Packages, pack.id);
  }

   const onDelete = () => {
    Alert.alert(
      'Please confirm',
      'Are you sure you would like to delete this package?',
      [
        {
          text: 'Yes',
          onPress: () => {
            deletePackage();
            setPackages(packages.filter((r) => r.id !== pack.id));
          }
        },
        {
          text: 'No',
          onPress: () => {
            console.log('No');
          }
        }
      ]
    )
   };


  return (
    <Pressable style={{ flexDirection: 'row', margin: 10, alignItems: 'center', }} onPress={onPress}>
      <Image
        source={require('../../../assets/logo.png')}
        style={{ width: 75, height: 75, marginRight: 10, borderRadius: 5 }} />
      <View style={{flex: 1}}>
        <Text style={{ fontWeight: '600', fontSize: 18, }}>{pack.name} </Text>
        <Text style={{ color: 'grey', fontSize: 14, }}>
          Price &#8226; $ {pack.price.toFixed(2)}
        </Text>
      </View>
      <View style={{ flexDirection: 'row'}}>
      <EvilIcons
        name='trash'
        size={40}
        color='black'
        onPress={onDelete}
      />
      </View>
    </Pressable>
  );
}

export default Package;