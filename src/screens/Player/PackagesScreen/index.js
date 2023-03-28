import { View, FlatList} from 'react-native';
import { useState, useEffect } from 'react';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Package } from '../../../models';
import styles from './styles';
import PackageComponent from '../../../components/Package';
import { useRoute } from '@react-navigation/native';

const PackagesScreen = () => {
  const [packages, setPackages] = useState([]);
  const route = useRoute();
  const coach = route.params?.coach;


  

  useEffect(() => {
    DataStore.query(Package,(p) => p.coachID.eq(coach.id), {
      sort: s => s.price(SortDirection.ASCENDING)
    }).then(setPackages);
  }, []);

    return (
        <View style={styles.page}>
          <FlatList
            data={packages}
            renderItem={({item, index}) => <PackageComponent pack={item} />}
            keyExtractor={(item, index) => index}
          />    
        </View>
      );
}

export default PackagesScreen;