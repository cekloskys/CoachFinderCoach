import { View, FlatList, Pressable, Text, RefreshControl } from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import { DataStore } from 'aws-amplify';
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
  const [displayPackages, setDisplayPackages] = useState([]);

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

  useEffect(() => {
    if (!packages) {
      return;
    }
    const sorted = packages.sort((a, b) => a.price - b.price);
    setDisplayPackages(sorted);
  }, [packages]);

  const onRefresh = useCallback(async () => {
    if (!coachDBUser) {
      return;
    }
    setRefreshing(true);
    try {
      DataStore.query(Package, (p) => p.coachID.eq(coachDBUser.id)).then(setPackages);
      setRefreshing(false);
      const sorted = packages.sort((a, b) => b.price - a.price);
      setDisplayPackages(sorted);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing, coachDBUser]);


  return (
    <View style={styles.page}>
      <FlatList
        data={displayPackages}
        renderItem={({ item, index }) => <CoachPackage pack={item} />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        keyExtractor={(item, index) => index}
      />
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>CREATE PACKAGE</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default PackagesScreen;