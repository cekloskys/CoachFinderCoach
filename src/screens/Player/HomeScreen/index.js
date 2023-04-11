import { View, FlatList, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';
import CoachComponent from '../../../components/Coach';
import SelectDropdown from 'react-native-select-dropdown';
import { DataStore } from 'aws-amplify';
import { Coach } from '../../../models';
import styles from './styles';
import { useSportContext } from '../../../context/SportContext';

let selectedSport = '';
let selectedSportId = '';

const HomeScreen = () => {

  const { sports } = useSportContext();
  const [displaySports, setDisplaySports] = useState([]);
  const [coaches, setCoaches] = useState([]);
  
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

  const fetchCoaches = async () => {
    const results = await DataStore.query(Coach, (c) => c.sportID.eq(selectedSportId));
    setCoaches(results);
  };

  if (sports.length === 0) {
    return (
        <ActivityIndicator size="large" color="#db4f40" style={{flex: 1}}/>
    )
  }

  return (
    <View style={styles.page}>
      <SelectDropdown
        data={displaySports}
        defaultButtonText={'SELECT A SPORT'}
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