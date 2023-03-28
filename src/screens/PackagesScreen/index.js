import { View, FlatList, Pressable, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Package } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import CoachPackage from '../../components/CoachPackage';
import { usePackageContext } from '../../context/PackageContext';

const PackagesScreen = () => {
  const navigation = useNavigation();
  const {packages, setPackages, fetchPackages} = usePackageContext();

  const onPress = () => {
    //DataStore.query(User, (user) => user.sub.eq(sub)).then((users) =>
    //setDBUser(users[0]));
    if (!packages) {
      alert('You must create a package plan.')
      navigation.navigate("Profile")
    } else {
      navigation.navigate("Create Package")
    }
  }

  const coach = '15d3a30d-0229-4ee8-9b1c-5d7a65c7d90f';

  useEffect(() => {
    /*DataStore.query(Package, (p) => p.coachID.eq(coach), Predicates.ALL, {
      sort: s => s.price(SortDirection.ASCENDING)
    }).then(setPackages);*/
    fetchPackages(coach);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={packages}
        renderItem={({ item, index }) => <CoachPackage pack={item} />}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>Create Package</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default PackagesScreen;