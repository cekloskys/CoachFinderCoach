import { View, FlatList, Pressable, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Package } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import PackageComponent from '../../components/Package';

const PackagesScreen = () => {
  const navigation = useNavigation();
  const [packages, setPackages] = useState([]);

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

  useEffect(() => {
    DataStore.query(Package, Predicates.ALL, {
      sort: s => s.price(SortDirection.ASCENDING)
    }).then(setPackages);
  }, []);

  return (
    <View style={styles.page}>
      <FlatList
        data={packages}
        renderItem={({ item, index }) => <PackageComponent pack={item} />}
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