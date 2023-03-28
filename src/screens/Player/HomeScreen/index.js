import { View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import CoachComponent from '../../../components/Coach';
import SelectDropdown from 'react-native-select-dropdown';
import { DataStore, Hub } from 'aws-amplify';
import { Coach, Sport } from '../../../models';
import styles from './styles';

let selectedSport = '';
let selectedSportId = '';

const HomeScreen = () => {

  const [sports, setSports] = useState([]);
  const [displaySports, setDisplaySports] = useState([]);
  const [coaches, setCoaches] = useState([]);

  useEffect(() => {
    DataStore.query(Sport).then(setSports);
    const removeListener = Hub.listen('datastore', async ({ payload }) => {
      console.log(payload.event);
      if (payload.event === 'syncQueriesReady') {
        DataStore.query(Sport).then(setSports);
      }
    });
    
    DataStore.start();
    
    return () => removeListener();
  }, []);
 
  useEffect(() => {
    if (!sports) {
      return;
    }
    const display = [];
    for (let i = 0; i < sports.length; i++) {
      display.push(sports[i].name);
    }
    display.sort();
    setDisplaySports(display);
  }, [sports]);
  console.log(sports);

  const fetchCoaches = async () => {
    const results = await DataStore.query(Coach, (c) => c.sportID.eq(selectedSportId));
    setCoaches(results);
  };
  console.log(coaches);

  return (
    <View style={styles.page}>
      <SelectDropdown
        data={displaySports}
        defaultButtonText={'Select a Sport'}
        onSelect={(selectedItem) => {
          selectedSport = selectedItem;
          for (let i = 0; i < sports.length; i++) {
            if (sports[i].name === selectedSport) {
              selectedSportId = sports[i].id
            }
          }
          fetchCoaches();
        }}
        buttonTextAfterSelection={(selectedItem) => {
          return selectedItem;
        }}
        rowTextForSelection={(item) => {
          return item;
        }}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
      <FlatList
        data={coaches}
        renderItem={({ item, index }) => <CoachComponent coach={item} />}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default HomeScreen;