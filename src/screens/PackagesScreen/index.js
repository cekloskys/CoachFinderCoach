import { View, FlatList, Pressable, Text, RefreshControl } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Package } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import CoachPackage from '../../components/CoachPackage';
import { usePackageContext } from '../../context/PackageContext';
import { useCoachContext } from '../../context/CoachContext';

const PackagesScreen = () => {
  const navigation = useNavigation();

  const { packages, setPackages, fetchPackages } = usePackageContext();
  const { coachDBUser } = useCoachContext();
  
  const [refreshing, setRefreshing] = useState(false);

  const onPress = () => {
    if (!coachDBUser) {
      alert('You must create a profile before you may create a package.')
      navigation.navigate("Basic Information")
    } else {
      navigation.navigate("Create Package")
    }
  }

  useEffect(() => {
    if (!coachDBUser) {
      return;
    }
    fetchPackages(coachDBUser.id);
  }, [coachDBUser]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      DataStore.query(Package, (p) => p.coachID.eq(coachDBUser.id), Predicates.ALL, {
        sort: s => s.price(SortDirection.ASCENDING)
      }).then(setPackages);
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  return (
    <View style={styles.page}>
      <FlatList
        data={packages}
        renderItem={({ item, index }) => <CoachPackage pack={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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