import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Package } from '../../../models';
import styles from './styles';
import PackageComponent from '../../../components/Package';
import { useRoute } from '@react-navigation/native';


const PackagesScreen = () => {
  const [packages, setPackages] = useState([]);
  const [displayPackages, setDisplayPackages] = useState([]);

 
  const route = useRoute();
  const coach = route.params?.coach;

  useEffect(() => {
    DataStore.query(Package, (p) => p.coachID.eq(coach.id)).then(setPackages);
  }, []);

  useEffect(() => {
    if (!packages) {
      return;
    }
    const sorted = packages.sort((a, b) => a.price - b.price);
    setDisplayPackages(sorted);
  }, [packages]);

  return (
    <View style={styles.page}>
      <FlatList
        data={displayPackages}
        renderItem={({ item, index }) => <PackageComponent pack={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default PackagesScreen;